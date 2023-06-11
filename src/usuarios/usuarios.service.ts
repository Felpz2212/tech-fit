import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { prismaClient } from 'src/database/prismaClient';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsuariosService {

  async create(createUsuarioDto: CreateUsuarioDto) {
    return await prismaClient.usuario.create({data: createUsuarioDto})
  }

  async findAll() {
    return await prismaClient.usuario.findMany();
  }

  async findOne(id: string) {
    return await prismaClient.usuario.findUnique({where: {
      id
    }});
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return await prismaClient.usuario.update({where: {id: id}, data: updateUsuarioDto});
  }

  async remove(id: string) {
    return await prismaClient.usuario.delete({where: {id: id}});
  }

  async findEmail(userWhereUniqueInput: Prisma.UsuarioWhereUniqueInput){
    return await prismaClient.usuario.findUnique({where: userWhereUniqueInput})
  }
}
