import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademiaDto } from './create-academia.dto';

export class UpdateAcademiaDto extends PartialType(CreateAcademiaDto) {

    nome?: string;
    endereco?: string;
    numero?: number;
}
