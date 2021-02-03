/*
  Warnings:

  - Added the required column `imageName` to the `realState` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `family` MODIFY `description` VARCHAR(191),
    MODIFY `isActif` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `password` VARCHAR(191);

-- AlterTable
ALTER TABLE `realState` ADD COLUMN     `imageName` VARCHAR(191) NOT NULL;
