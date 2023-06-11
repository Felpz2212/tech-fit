import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsuariosService]
})
export class AuthModule {}
