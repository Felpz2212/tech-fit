import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class AlunosService {
  async create(createAlunoDto: CreateAlunoDto) {
    return await prismaClient.aluno.create({data: createAlunoDto});
  }

  async findAll() {
    return await prismaClient.aluno.findMany({
      include: {
        user: true
      }
    });
  }

  async findOne(id: string) {
    return await prismaClient.aluno.findUnique({where: {
      id
    }, include: {
      user: true,
      situacao: true
    }});
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto) {
    return await prismaClient.aluno.update({where: {id: id}, data: updateAlunoDto});
  }

  async remove(id: string) {
    return await prismaClient.aluno.delete({where: {id: id}});
  }

  async findByUser(id: string){
    return await prismaClient.aluno.findFirst({where: {
      id_user: id
    }, include: {
      user: true,
      situacao: true
    }});
  }
}
