import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdukDto } from './dto/create-produk.dto';

@Injectable()
export class ProdukService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateProdukDto) {
    // 1. Cari dulu toko mana yang dimiliki oleh user ini
    const toko = await this.prisma.toko.findUnique({
      where: { penyedia_id: userId },
    });

    if (!toko) {
      throw new NotFoundException('Kamu harus membuat toko terlebih dahulu sebelum menambah produk.');
    }

    // 2. Simpan produk dan hubungkan ke ID Toko tersebut
    return await this.prisma.produk.create({
      data: {
        ...dto,
        toko_id: toko.id,
      },
    });
  }

  async findAll() {
    return await this.prisma.produk.findMany({
      include: { toko: true }, // Biar pembeli tahu ini makanan dari toko mana
    });
  }
}