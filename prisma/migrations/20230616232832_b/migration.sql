-- DropForeignKey
ALTER TABLE `alunos` DROP FOREIGN KEY `alunos_id_user_fkey`;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
