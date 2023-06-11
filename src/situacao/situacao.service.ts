import { Injectable } from '@nestjs/common';
import { CreateSituacaoDto } from './dto/create-situacao.dto';
import { UpdateSituacaoDto } from './dto/update-situacao.dto';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class SituacaoService {
  async create(createSituacaoDto: CreateSituacaoDto) {
    return await prismaClient.situacaoMensalidade.create({data: createSituacaoDto});
  }

  async findAll() {
    return await prismaClient.situacaoMensalidade.findMany();
  }

  async findOne(id_situacao: string) {
    return await prismaClient.situacaoMensalidade.findUnique({
      where: {
        id: id_situacao,
      },
    });
  }

  async update(id: string, updateSituacaoDto: UpdateSituacaoDto) {
    return await prismaClient.situacaoMensalidade.update({where: {id: id}, data: updateSituacaoDto});
  }

  async remove(id: string) {
    return await prismaClient.situacaoMensalidade.delete({where: {id: id}});
  }
}
