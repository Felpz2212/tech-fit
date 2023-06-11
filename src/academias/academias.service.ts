import { Injectable } from '@nestjs/common';
import { CreateAcademiaDto } from './dto/create-academia.dto';
import { UpdateAcademiaDto } from './dto/update-academia.dto';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class AcademiasService {
  async create(createAcademiaDto: CreateAcademiaDto) {
    return await prismaClient.academia.create({data: createAcademiaDto});
  }

  async findAll() {
    return await prismaClient.academia.findMany();
  }

  async findOne(id: string) {
    return await prismaClient.academia.findUnique({where: {id: id}});
  }

  async update(id: string, updateAcademiaDto: UpdateAcademiaDto) {
    return await prismaClient.academia.update({data: updateAcademiaDto, where:{
      id: id
    }});
  }

  async remove(id: string) {
    return await prismaClient.academia.delete({where: {id: id}});
  }
}
