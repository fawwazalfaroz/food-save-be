import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Kamu harus login terlebih dahulu');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'kunci_rahasia_super_aman', // Harus sama dengan yang di auth.module.ts
      });
      // Masukkan data user (id, email, role) ke dalam objek request
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Token tidak valid atau sudah kedaluwarsa');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}