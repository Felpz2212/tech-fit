import { Injectable } from '@nestjs/common';
import { CreateTreinoDto } from './dto/create-treino.dto';
import { UpdateTreinoDto } from './dto/update-treino.dto';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class TreinosService {
  
  async create(createTreinoDto: CreateTreinoDto) {
    return await prismaClient.treino.create({data: createTreinoDto});
  }

  async findAll() {
    return await prismaClient.treino.findMany();
  }

  async findOne(id: string) {
    return await prismaClient.treino.findUnique({where: {
      id: id
    }});
  }

  async update(id: string, updateTreinoDto: UpdateTreinoDto) {
    return await prismaClient.treino.update({data: updateTreinoDto, where: {
      id: id
    }});
  }

  async remove(id: string) {
    return await prismaClient.treino.delete({where: {
      id: id
    }});
  }
}
