/*
  Warnings:

  - You are about to alter the column `diameter` on the `planet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `gravitasi` on the `planet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `planet` MODIFY `diameter` INTEGER NOT NULL,
    MODIFY `gravitasi` DECIMAL(65, 30) NOT NULL;
