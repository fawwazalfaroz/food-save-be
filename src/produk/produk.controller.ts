import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { CreateProdukDto } from './dto/create-produk.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';

@Controller('produk')
export class ProdukController {
  constructor(private readonly produkService: ProdukService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@GetUser('sub') userId: string, @Body() dto: CreateProdukDto) {
    return await this.produkService.create(userId, dto);
  }

  @Get()
  async findAll() {
    return await this.produkService.findAll();
  }
}