import { Module } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { ProdukController } from './produk.controller';

@Module({
  providers: [ProdukService],
  controllers: [ProdukController]
})
export class ProdukModule {}
