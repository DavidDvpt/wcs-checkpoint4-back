/*
  Warnings:

  - You are about to drop the column `kingDomRole` on the `family` table. All the data in the column will be lost.
  - Added the required column `kingdomRole` to the `family` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `family` DROP COLUMN `kingDomRole`,
    ADD COLUMN     `kingdomRole` VARCHAR(191) NOT NULL;
