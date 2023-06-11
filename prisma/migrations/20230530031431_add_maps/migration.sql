/*
  Warnings:

  - You are about to drop the `academia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `aula` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `movimentacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `situacaomensalidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `treino` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `alunos` DROP FOREIGN KEY `alunos_id_situacao_fkey`;

-- DropForeignKey
ALTER TABLE `aula` DROP FOREIGN KEY `Aula_id_academia_fkey`;

-- DropForeignKey
ALTER TABLE `aula` DROP FOREIGN KEY `Aula_id_aluno_fkey`;

-- DropForeignKey
ALTER TABLE `aula` DROP FOREIGN KEY `Aula_id_treino_fkey`;

-- DropForeignKey
ALTER TABLE `movimentacao` DROP FOREIGN KEY `Movimentacao_id_aluno_fkey`;

-- DropForeignKey
ALTER TABLE `movimentacao` DROP FOREIGN KEY `Movimentacao_id_tipoMovimentacao_fkey`;

-- DropTable
DROP TABLE `academia`;

-- DropTable
DROP TABLE `aula`;

-- DropTable
DROP TABLE `movimentacao`;

-- DropTable
DROP TABLE `situacaomensalidade`;

-- DropTable
DROP TABLE `treino`;

-- CreateTable
CREATE TABLE `movimentacoes` (
    `id` VARCHAR(191) NOT NULL,
    `id_aluno` VARCHAR(191) NOT NULL,
    `id_tipoMovimentacao` VARCHAR(191) NOT NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `data_pgto` DATETIME(3) NOT NULL,
    `data_vencimento` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacoesMensalidades` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `academias` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `treinos` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `aulas` (
    `id` VARCHAR(191) NOT NULL,
    `data_aula` DATETIME(3) NOT NULL,
    `id_academia` VARCHAR(191) NOT NULL,
    `id_aluno` VARCHAR(191) NOT NULL,
    `id_treino` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_id_situacao_fkey` FOREIGN KEY (`id_situacao`) REFERENCES `situacoesMensalidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movimentacoes` ADD CONSTRAINT `movimentacoes_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movimentacoes` ADD CONSTRAINT `movimentacoes_id_tipoMovimentacao_fkey` FOREIGN KEY (`id_tipoMovimentacao`) REFERENCES `tiposMovimentacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_id_academia_fkey` FOREIGN KEY (`id_academia`) REFERENCES `academias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_id_treino_fkey` FOREIGN KEY (`id_treino`) REFERENCES `treinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
