import { IsNotEmpty, IsString, IsNumber, IsUrl } from 'class-validator';

export class CreateProdukDto {
  @IsString()
  @IsNotEmpty({ message: 'Nama makanan harus diisi' })
  nama_makanan!: string;

  @IsString()
  @IsNotEmpty({ message: 'Deskripsi makanan harus diisi' })
  deskripsi!: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Harga asli harus diisi' })
  harga_asli!: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Harga diskon harus diisi' })
  harga_diskon!: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Stok harus diisi' })
  stok!: number;

  @IsString()
  @IsNotEmpty({ message: 'Foto makanan harus ada' })
  foto!: string; // Sementara kita pakai URL string dulu

  @IsString()
  @IsNotEmpty({ message: 'Waktu pickup harus diisi' })
  waktu_pickup!: string;
}