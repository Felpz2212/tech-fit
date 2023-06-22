import { Injectable } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class AulasService {
  async create(createAulaDto: CreateAulaDto) {
    return await prismaClient.aula.create({data: createAulaDto});
  }

  async findAll() {
    return await prismaClient.aula.findMany({include: {
      academia: true,
      aluno: {include: {user: true}},
      treino: true
    }});
  }

  async findOne(id: string) {
    return await prismaClient.aula.findUnique({where: {id}, include: {
      academia: true,
      aluno: {include: {user: true}},
      treino: true
    }});
  }

  async update(id: string, updateAulaDto: UpdateAulaDto) {
    return await prismaClient.aula.update({data: updateAulaDto, where: {id}});
  }

  async remove(id: string) {
    return prismaClient.aula.delete({where: {id}});
  }

  async findByAluno(id: string){
    return prismaClient.aula.findMany({where: {
      id_aluno: id
    }, include: {
      academia: true,
      aluno: {include: {user: true}},
      treino: true
    }})
  }
}
