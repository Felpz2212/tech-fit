/*
  Warnings:

  - You are about to drop the column `pass` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `password` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `pass`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
