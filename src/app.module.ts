import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { TokoModule } from './toko/toko.module';
import { ProdukModule } from './produk/produk.module';

@Module({
  imports: [PrismaModule, AuthModule, TokoModule, ProdukModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
