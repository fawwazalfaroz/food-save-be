import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTokoDto } from './dto/create-toko.dto';

@Injectable()
export class TokoService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateTokoDto) {
    // 1. Cek apakah user ini sudah memiliki toko
    const existingToko = await this.prisma.toko.findUnique({
      where: { penyedia_id: userId },
    });

    if (existingToko) {
      throw new ConflictException('Satu akun penyedia hanya boleh memiliki satu toko.');
    }

    // 2. Simpan data toko baru
    return await this.prisma.toko.create({
      data: {
        ...dto,
        penyedia_id: userId,
      },
    });
  }

  async getMyStore(userId: string) {
    return await this.prisma.toko.findUnique({
      where: { penyedia_id: userId },
      include: { produk: true }, // Mengambil data toko beserta daftar produknya
    });
  }
}