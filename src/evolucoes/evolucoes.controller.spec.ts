import { Test, TestingModule } from '@nestjs/testing';
import { EvolucoesController } from './evolucoes.controller';
import { EvolucoesService } from './evolucoes.service';

describe('EvolucoesController', () => {
  let controller: EvolucoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvolucoesController],
      providers: [EvolucoesService],
    }).compile();

    controller = module.get<EvolucoesController>(EvolucoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
