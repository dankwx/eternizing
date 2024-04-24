-- CreateIndex
CREATE INDEX "userId" ON "VideoClaim"("userId");

-- CreateIndex
CREATE INDEX "user_userUsername" ON "VideoClaim"("userId", "userUsername");
