import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateTokoDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama toko tidak boleh kosong' })
  nama_toko!: string;

  @IsString()
  @IsNotEmpty({ message: 'Alamat toko tidak boleh kosong' })
  alamat_toko!: string;

  @IsString()
  @IsOptional()
  deskripsi?: string;

  @IsString()
  @IsOptional()
  kontak?: string;

  @IsString()
  @IsNotEmpty({ message: 'Jam operasional harus diisi' })
  jam_operasional!: string;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;
}