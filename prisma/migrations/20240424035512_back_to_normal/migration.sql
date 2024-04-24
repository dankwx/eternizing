/*
  Warnings:

  - You are about to drop the column `userUsername` on the `VideoClaim` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "userId";

-- DropIndex
DROP INDEX "username";

-- AlterTable
ALTER TABLE "VideoClaim" DROP COLUMN "userUsername";
