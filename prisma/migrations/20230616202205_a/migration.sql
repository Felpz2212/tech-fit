-- DropForeignKey
ALTER TABLE `alunos` DROP FOREIGN KEY `alunos_id_situacao_fkey`;

-- DropForeignKey
ALTER TABLE `alunos` DROP FOREIGN KEY `alunos_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `aulas` DROP FOREIGN KEY `aulas_id_aluno_fkey`;

-- DropForeignKey
ALTER TABLE `movimentacoes` DROP FOREIGN KEY `movimentacoes_id_aluno_fkey`;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_id_situacao_fkey` FOREIGN KEY (`id_situacao`) REFERENCES `situacoesMensalidades`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movimentacoes` ADD CONSTRAINT `movimentacoes_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
