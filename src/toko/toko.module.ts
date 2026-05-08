import { Module } from '@nestjs/common';
import { TokoService } from './toko.service';
import { TokoController } from './toko.controller';

@Module({
  providers: [TokoService],
  controllers: [TokoController]
})
export class TokoModule {}
