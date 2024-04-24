/*
  Warnings:

  - You are about to drop the `UserClaimedVideos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserClaimedVideos" DROP CONSTRAINT "UserClaimedVideos_userId_fkey";

-- DropTable
DROP TABLE "UserClaimedVideos";
