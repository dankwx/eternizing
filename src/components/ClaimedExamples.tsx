"use client";

import Image from "next/image";
import thumbImg from "../../public/300wd.jpg";
import ytb from "../../public/youtube.svg";
import { useEffect, useState } from "react";

const VIDEO_URL =
  "https://www.youtube.com/watch?v=4IenX7OHumk&pp=ygURd2lsZCBhbmltYWxzIGxpZmU%3D";

interface VideoDetails {
  title: string;
  thumbnailUrl: string;
}

export default function ClaimedExamples() {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);

  useEffect(() => {
    async function fetchVideoDetails() {
      try {
        const details = await getYoutubeVideoDetails(VIDEO_URL);
        setVideoDetails(details);
      } catch (error) {
        console.error("Failed to fetch YouTube video details:", error);
      }
    }

    fetchVideoDetails();
  }, []);

  async function getYoutubeVideoDetails(videoUrl: string): Promise<VideoDetails> {
    const videoId = new URL(videoUrl).searchParams.get("v");
    if (!videoId) {
      throw new Error("Invalid YouTube video URL");
    }

    const apiKey = "AIzaSyBFQKXiPBiluxE3jtWnTvZH3A9K76A8afc"; // Substitua pela sua chave de API do YouTube
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch YouTube video");
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        throw new Error("Video not found");
      }

      const snippet = data.items[0]?.snippet;
      if (!snippet) {
        throw new Error("Snippet not found");
      }

      const videoTitle = snippet.title;
      const thumbnailUrl = snippet.thumbnails?.medium?.url; // Escolha o tamanho da miniatura desejado

      if (!videoTitle || !thumbnailUrl) {
        throw new Error("Video details not found");
      }

      return { title: videoTitle, thumbnailUrl: thumbnailUrl };
    } catch (error) {
      throw new Error("Failed to fetch YouTube video details");
    }
  }

  const videoUrl = videoDetails?.thumbnailUrl
  return (
    <div className="flex flex-col w-fit justify-center items-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-3xl px-6 pb-4">
        Dilluc claimed
      </h2>
      <hr className="w-48 h-1 mx-auto my bg-gray-300 border-0 rounded md:my dark:bg-gray-700"></hr>
      <Image
        className="mt-2"
        src={ytb}
        alt="Youtube SVG"
        width={25}
        height={25}
      />
      <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-2xl px-6 pb-4 bt-2">
        {videoDetails?.title}
      </p>
      <div className="relative text-center">
  {videoUrl ? (
    <Image
      src={videoUrl}
      alt="Youtube Video Thumbnail"
      width={400}
      height={300}
      style={{ borderRadius: "5px", overflow: "hidden" }}
    />
  ) : (
    <div>No video thumbnail available</div>
  )}
  <div className="absolute right-4 bottom-2 text-white bg-gray-800/75 w-12">
    <span className="text=white font-bold">12:01</span>
  </div>
</div>
    </div>
  );
}
