import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsuariosService){ }

    async signIn(username: string, pass: string){
        const user = await this.userService.findEmail({email: username} as Prisma.UsuarioWhereUniqueInput);
        if(user?.password !== pass){
            throw new UnauthorizedException();
        }

        const {password , ...result} = user

        return result;
    }

}
