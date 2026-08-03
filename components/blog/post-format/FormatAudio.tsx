"use client";

import Image from "next/image";
import {
  MediaController,
  MediaControlBar,
  MediaPlayButton,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaMuteButton,
  MediaVolumeRange,
} from "media-chrome/react";
import { Post } from "@/data/posts";

// Blog post media - audio player format.
export default function FormatAudio({ post }: { post: Post }) {
  if (!post.audio) return null;

  return (
    <div className="image-box type-audio">
      <Image
        src={post.imageSrc}
        alt={post.title}
        className="type-audio__bg"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="type-audio__content">
        {post.audioCaption && <h4>{post.audioCaption}</h4>}
        <MediaController audio className="media-player">
          <audio slot="media" src={post.audio} preload="none" />
          <MediaControlBar>
            <MediaPlayButton />
            <MediaTimeDisplay />
            <MediaTimeRange />
            <MediaTimeDisplay showDuration />
            <MediaMuteButton />
            <MediaVolumeRange />
          </MediaControlBar>
        </MediaController>
      </div>
    </div>
  );
}
