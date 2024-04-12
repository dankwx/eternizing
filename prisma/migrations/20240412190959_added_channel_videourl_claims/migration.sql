-- CreateTable
CREATE TABLE "VideoClaim" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "videoTitle" TEXT NOT NULL,
    "viewCount" INTEGER NOT NULL,
    "claimedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoClaim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChannelClaim" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "channelUrl" TEXT NOT NULL,
    "channelName" TEXT NOT NULL,
    "subscriberCount" INTEGER NOT NULL,
    "claimedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChannelClaim_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VideoClaim_videoUrl_key" ON "VideoClaim"("videoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "ChannelClaim_channelUrl_key" ON "ChannelClaim"("channelUrl");

-- AddForeignKey
ALTER TABLE "VideoClaim" ADD CONSTRAINT "VideoClaim_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelClaim" ADD CONSTRAINT "ChannelClaim_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
