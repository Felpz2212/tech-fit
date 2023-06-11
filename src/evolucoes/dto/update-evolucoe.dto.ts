import { PartialType } from '@nestjs/mapped-types';
import { CreateEvolucoeDto } from './create-evolucoe.dto';

export class UpdateEvolucoeDto extends PartialType(CreateEvolucoeDto) {
    
    peso?: number;
}
