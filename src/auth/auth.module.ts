import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true, // Membuat JWT bisa diakses di semua modul nantinya
      secret: 'kunci_rahasia_super_aman', // Idealnya ini ditaruh di file .env, tapi untuk sekarang kita hardcode dulu
      signOptions: { expiresIn: '1d' }, // Tiket/Token akan hangus dalam 1 hari
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}