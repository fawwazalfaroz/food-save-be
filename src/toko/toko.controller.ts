import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { TokoService } from './toko.service';
import { CreateTokoDto } from './dto/create-toko.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';

@Controller('toko')
export class TokoController {
  constructor(private readonly tokoService: TokoService) {}

  @Post()
  @UseGuards(JwtAuthGuard) // <--- Pasang Gembok di sini!
  async create(
    @GetUser('sub') userId: string, // <--- Ambil ID User otomatis dari Token
    @Body() dto: CreateTokoDto
  ) {
    return await this.tokoService.create(userId, dto);
  }

  @Get('my-store')
  @UseGuards(JwtAuthGuard) // <--- Pasang Gembok di sini juga!
  async getMyStore(@GetUser('sub') userId: string) {
    return await this.tokoService.getMyStore(userId);
  }
}