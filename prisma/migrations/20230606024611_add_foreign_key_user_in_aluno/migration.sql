/*
  Warnings:

  - Added the required column `id_user` to the `alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
