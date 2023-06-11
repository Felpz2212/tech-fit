import { Module } from '@nestjs/common';
import { RecebimentosService } from './recebimentos.service';
import { RecebimentosController } from './recebimentos.controller';

@Module({
  controllers: [RecebimentosController],
  providers: [RecebimentosService]
})
export class RecebimentosModule {}
