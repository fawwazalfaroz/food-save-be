import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from '@prisma/client';

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama tidak boleh kosong' })
  nama!: string; // <-- Perhatikan tambahan tanda ! di sini

  @IsEmail({}, { message: 'Format email tidak valid' })
  @IsNotEmpty({ message: 'Email tidak boleh kosong' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password!: string;

  @IsString()
  @IsNotEmpty({ message: 'Nomor telepon tidak boleh kosong' })
  no_telepon!: string;

  @IsEnum(Role, { message: 'Role harus berupa PEMBELI atau PENYEDIA' })
  role!: Role;
}