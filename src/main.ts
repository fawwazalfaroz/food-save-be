import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Mengaktifkan validasi global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Otomatis membuang properti asing yang tidak ada di DTO
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();