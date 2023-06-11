import { Module } from '@nestjs/common';
import { EvolucoesService } from './evolucoes.service';
import { EvolucoesController } from './evolucoes.controller';

@Module({
  controllers: [EvolucoesController],
  providers: [EvolucoesService]
})
export class EvolucoesModule {}
