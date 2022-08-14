/*
  Warnings:

  - You are about to drop the `mahasiswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `mahasiswa`;

-- CreateTable
CREATE TABLE `Planet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_planet` VARCHAR(191) NOT NULL,
    `diameter` INTEGER NOT NULL,
    `gravitasi` INTEGER NOT NULL,
    `keterangan` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
