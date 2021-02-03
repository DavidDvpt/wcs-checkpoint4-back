/*
  Warnings:

  - You are about to drop the column `realStateId` on the `family` table. All the data in the column will be lost.
  - You are about to drop the column `realStateId` on the `visit` table. All the data in the column will be lost.
  - You are about to drop the `realState` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `family` DROP FOREIGN KEY `family_ibfk_1`;

-- DropForeignKey
ALTER TABLE `visit` DROP FOREIGN KEY `visit_ibfk_1`;

-- AlterTable
ALTER TABLE `family` DROP COLUMN `realStateId`,
    ADD COLUMN     `realEstateId` INTEGER;

-- AlterTable
ALTER TABLE `visit` DROP COLUMN `realStateId`,
    ADD COLUMN     `realEstateId` INTEGER;

-- CreateTable
CREATE TABLE `realEstate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imageName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `isActif` BOOLEAN NOT NULL DEFAULT true,
    `isVisible` BOOLEAN NOT NULL DEFAULT true,
    `maxVisite` INTEGER NOT NULL DEFAULT 30,
UNIQUE INDEX `realEstate.name_unique`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- DropTable
DROP TABLE `realState`;

-- AddForeignKey
ALTER TABLE `family` ADD FOREIGN KEY (`realEstateId`) REFERENCES `realEstate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `visit` ADD FOREIGN KEY (`realEstateId`) REFERENCES `realEstate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
