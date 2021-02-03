-- CreateTable
CREATE TABLE `goldBook` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(191) NOT NULL,
UNIQUE INDEX `admin.role_unique`(`role`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `realEstate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imageName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `isActif` BOOLEAN NOT NULL DEFAULT true,
    `isVisitable` BOOLEAN NOT NULL DEFAULT true,
    `maxVisite` INTEGER NOT NULL DEFAULT 30,
UNIQUE INDEX `realEstate.name_unique`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `hour` INTEGER NOT NULL,
    `realEstateId` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `family` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `imageName` VARCHAR(191),
    `description` VARCHAR(191),
    `isActif` BOOLEAN NOT NULL DEFAULT true,
    `password` VARCHAR(191),
    `kingdomRole` VARCHAR(191) NOT NULL,
    `realEstateId` INTEGER,
    `adminId` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `visit` ADD FOREIGN KEY (`realEstateId`) REFERENCES `realEstate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `family` ADD FOREIGN KEY (`realEstateId`) REFERENCES `realEstate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `family` ADD FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
