-- DropForeignKey
ALTER TABLE `aulas` DROP FOREIGN KEY `aulas_id_academia_fkey`;

-- DropForeignKey
ALTER TABLE `aulas` DROP FOREIGN KEY `aulas_id_treino_fkey`;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_id_academia_fkey` FOREIGN KEY (`id_academia`) REFERENCES `academias`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `aulas` ADD CONSTRAINT `aulas_id_treino_fkey` FOREIGN KEY (`id_treino`) REFERENCES `treinos`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
