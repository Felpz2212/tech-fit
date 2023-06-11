import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecebimentosService } from './recebimentos.service';
import { CreateRecebimentoDto } from './dto/create-recebimento.dto';
import { UpdateRecebimentoDto } from './dto/update-recebimento.dto';

@Controller('recebimentos')
export class RecebimentosController {
  constructor(private readonly recebimentosService: RecebimentosService) {}

  @Post()
  create(@Body() createRecebimentoDto: CreateRecebimentoDto) {
    return this.recebimentosService.create(createRecebimentoDto);
  }

  @Get()
  findAll() {
    return this.recebimentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recebimentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecebimentoDto: UpdateRecebimentoDto) {
    return this.recebimentosService.update(+id, updateRecebimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recebimentosService.remove(+id);
  }
}
