/*
  Warnings:

  - You are about to drop the column `message` on the `contact` table. All the data in the column will be lost.
  - Added the required column `description` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contact` DROP COLUMN `message`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
