import { Injectable } from '@nestjs/common';
import { CreateEvolucoeDto } from './dto/create-evolucoe.dto';
import { UpdateEvolucoeDto } from './dto/update-evolucoe.dto';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class EvolucoesService {
  async create(createEvolucoeDto: CreateEvolucoeDto) {
    return prismaClient.evolucao.create({data: createEvolucoeDto});
  }

  async findAll() {
    return await prismaClient.evolucao.findMany();
  }

  async findOne(id: string) {
    return await prismaClient.evolucao.findUnique({where: {id: id}});
  }

  async update(id: string, updateEvolucoeDto: UpdateEvolucoeDto) {
    return await prismaClient.evolucao.update({data: updateEvolucoeDto, where:{
      id: id
    }});
  }

  async remove(id: string) {
    return await prismaClient.evolucao.delete({where: {id: id}});
  }

  async findClient(id: string){
    return await prismaClient.evolucao.findMany({where: {id_aluno: id}})
  }
}
