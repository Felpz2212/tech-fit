import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunoDto } from './create-aluno.dto';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {
    
    idade?: number;
    whatsapp?: string;
    id_situacao?: string;
}
