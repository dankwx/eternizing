-- CreateTable
CREATE TABLE "UserClaimedVideos" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,

    CONSTRAINT "UserClaimedVideos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserClaimedVideos" ADD CONSTRAINT "UserClaimedVideos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
