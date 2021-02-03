/*
  Warnings:

  - You are about to drop the column `isVisible` on the `realEstate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `realEstate` DROP COLUMN `isVisible`,
    ADD COLUMN     `isVisitable` BOOLEAN NOT NULL DEFAULT true;
