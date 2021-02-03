/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[login]` on the table `family`. If there are existing duplicate values, the migration will fail.
  - Added the required column `login` to the `family` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `family` ADD COLUMN     `login` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `family.login_unique` ON `family`(`login`);
