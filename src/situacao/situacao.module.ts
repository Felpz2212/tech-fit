import { Module } from '@nestjs/common';
import { SituacaoService } from './situacao.service';
import { SituacaoController } from './situacao.controller';

@Module({
  controllers: [SituacaoController],
  providers: [SituacaoService]
})
export class SituacaoModule {}
