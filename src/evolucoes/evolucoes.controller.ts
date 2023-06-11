import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvolucoesService } from './evolucoes.service';
import { CreateEvolucoeDto } from './dto/create-evolucoe.dto';
import { UpdateEvolucoeDto } from './dto/update-evolucoe.dto';

@Controller('evolucoes')
export class EvolucoesController {
  constructor(private readonly evolucoesService: EvolucoesService) {}

  @Post()
  create(@Body() createEvolucoeDto: CreateEvolucoeDto) {
    return this.evolucoesService.create(createEvolucoeDto);
  }

  @Get()
  findAll() {
    return this.evolucoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evolucoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvolucoeDto: UpdateEvolucoeDto) {
    return this.evolucoesService.update(id, updateEvolucoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evolucoesService.remove(id);
  }

  @Get('/usuario:id')
  findClient(@Param('id') id: string) {
    return this.evolucoesService.findClient(id);
  }
}
