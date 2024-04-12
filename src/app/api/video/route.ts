// api/video/route.ts

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";

// Define a schema for input validation
const videoSchema = z.object({
  userId: z.number(),
  videoUrl: z.string().min(1, "YouTube URL is required"),
  videoTitle: z.string().min(1, "Video title is required"),
});

export async function POST(req: Request) {
  // Renamed to `createVideo`
  try {
    const body = await req.json();
    const { userId, videoUrl, videoTitle } = videoSchema.parse(body);

    // Check if the video already exists by videoUrl
    const existingVideo = await db.videoClaim.findUnique({
      where: { videoUrl },
    });

    if (existingVideo) {
      return NextResponse.json(
        { video: null, message: "Video already exists" },
        { status: 409 }
      );
    }

    const newVideo = await db.videoClaim.create({
      data: {
        userId,
        videoUrl,
        videoTitle,
        viewCount: 0,
      },
    });

    return NextResponse.json(
      {
        video: newVideo,
        message: "Video created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", errorDetail: error },
      { status: 500 }
    );
  }
}
