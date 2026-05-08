import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  // Tambahkan JwtService ke dalam constructor
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email sudah terdaftar, silakan gunakan email lain.');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password, saltRounds);

    const newUser = await this.prisma.user.create({
      data: {
        nama: dto.nama,
        email: dto.email,
        password: hashedPassword,
        no_telepon: dto.no_telepon,
        role: dto.role,
      },
      select: {
        id: true,
        nama: true,
        email: true,
        role: true,
        created_at: true,
      },
    });

    return newUser;
  }

  // --- FITUR LOGIN BARU KITA ---
  async login(dto: LoginDto) {
    // 1. Cari user berdasarkan email
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    // 2. Jika user tidak ditemukan, tolak
    if (!user) {
      throw new UnauthorizedException('Email atau password salah');
    }

    // 3. Cek apakah password yang diketik cocok dengan yang ada di database
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Email atau password salah');
    }

    // 4. Jika sukses, buat tiket JWT (Payload)
    const payload = { sub: user.id, email: user.email, role: user.role };
    
    // 5. Kembalikan token ke pengguna
    return {
      message: 'Login berhasil',
      access_token: await this.jwtService.signAsync(payload),
      role: user.role, // Kita kembalikan role agar frontend tahu harus mengarahkan ke halaman mana
    };
  }
}