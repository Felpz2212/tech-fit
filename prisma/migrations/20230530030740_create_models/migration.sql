-- CreateTable
CREATE TABLE `alunos` (
    `id` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `whatsapp` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_situacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evolucoes` (
    `id` VARCHAR(191) NOT NULL,
    `peso` DECIMAL(65, 30) NOT NULL,
    `id_aluno` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tiposMovimentacoes` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movimentacao` (
    `id` VARCHAR(191) NOT NULL,
    `id_aluno` VARCHAR(191) NOT NULL,
    `id_tipoMovimentacao` VARCHAR(191) NOT NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `data_pgto` DATETIME(3) NOT NULL,
    `data_vencimento` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SituacaoMensalidade` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Academia` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Treino` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aula` (
    `id` VARCHAR(191) NOT NULL,
    `data_aula` DATETIME(3) NOT NULL,
    `id_academia` VARCHAR(191) NOT NULL,
    `id_aluno` VARCHAR(191) NOT NULL,
    `id_treino` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_id_situacao_fkey` FOREIGN KEY (`id_situacao`) REFERENCES `SituacaoMensalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evolucoes` ADD CONSTRAINT `evolucoes_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movimentacao` ADD CONSTRAINT `Movimentacao_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movimentacao` ADD CONSTRAINT `Movimentacao_id_tipoMovimentacao_fkey` FOREIGN KEY (`id_tipoMovimentacao`) REFERENCES `tiposMovimentacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aula` ADD CONSTRAINT `Aula_id_academia_fkey` FOREIGN KEY (`id_academia`) REFERENCES `Academia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aula` ADD CONSTRAINT `Aula_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aula` ADD CONSTRAINT `Aula_id_treino_fkey` FOREIGN KEY (`id_treino`) REFERENCES `Treino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
