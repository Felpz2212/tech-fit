import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AlunosModule } from './alunos/alunos.module';
import { SituacaoModule } from './situacao/situacao.module';
import { AcademiasModule } from './academias/academias.module';
import { TreinosModule } from './treinos/treinos.module';
import { GastosModule } from './gastos/gastos.module';
import { RecebimentosModule } from './recebimentos/recebimentos.module';
import { EvolucoesModule } from './evolucoes/evolucoes.module';
import { AulasModule } from './aulas/aulas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuariosModule, AlunosModule, SituacaoModule, AcademiasModule, TreinosModule, GastosModule, RecebimentosModule, EvolucoesModule, AulasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
