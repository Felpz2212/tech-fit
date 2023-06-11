import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDTO } from './dto/loginDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  create(@Body() loginDTO: loginDTO) {
    return this.authService.signIn(loginDTO.username, loginDTO.pass);
  }
}
