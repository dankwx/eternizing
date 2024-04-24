// api/video/route.ts

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// Define a schema for input validation
const videoSchema = z.object({
  userId: z.number(),
  videoUrl: z.string().min(1, "YouTube URL is required"),
  videoTitle: z.string().min(1, "Video title is required"),
});

export async function POST(req: Request) {
  // Renamed to `createVideo`
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id ? parseInt(session.user.id, 10) : undefined;

    if (userId === undefined) {
      throw new Error("User ID is undefined in the session.");
    }

    const body = await req.json();
    const { videoUrl, videoTitle } = videoSchema.parse({
      ...body,
      userId, // Incluindo o userId fixo no objeto a ser validado
    });

    // Check if the video already exists by videoUrl
    const existingVideo = await db.videoClaim.findFirst({
      where: {
        userId,
        videoUrl,
      },
    });

    if (existingVideo) {
      return NextResponse.json(
        { video: null, message: "You have already claimed this video URL" },
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
