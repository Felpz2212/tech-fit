import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademiasService } from './academias.service';
import { CreateAcademiaDto } from './dto/create-academia.dto';
import { UpdateAcademiaDto } from './dto/update-academia.dto';

@Controller('academias')
export class AcademiasController {
  constructor(private readonly academiasService: AcademiasService) {}

  @Post()
  create(@Body() createAcademiaDto: CreateAcademiaDto) {
    return this.academiasService.create(createAcademiaDto);
  }

  @Get()
  findAll() {
    return this.academiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academiasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademiaDto: UpdateAcademiaDto) {
    return this.academiasService.update(id, updateAcademiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academiasService.remove(id);
  }
}
