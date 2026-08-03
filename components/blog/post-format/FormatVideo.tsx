"use client";

import {
  MediaController,
  MediaControlBar,
  MediaPlayButton,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaMuteButton,
  MediaVolumeRange,
  MediaFullscreenButton,
} from "media-chrome/react";
import { Post } from "@/data/posts";

// Blog post media - video player format.
export default function FormatVideo({ post }: { post: Post }) {
  return (
    <div className="video-box">
      {post.videoType === "local" && post.video ? (
        <MediaController className="media-player">
          <video slot="media" src={post.video} preload="metadata" playsInline />
          <MediaControlBar>
            <MediaPlayButton />
            <MediaTimeRange />
            <MediaTimeDisplay showDuration />
            <MediaMuteButton />
            <MediaVolumeRange />
            <MediaFullscreenButton />
          </MediaControlBar>
        </MediaController>
      ) : post.videoType === "youtube" && post.videoId ? (
        <div className="video-embed">
          <iframe
            src={`https://www.youtube.com/embed/${post.videoId}`}
            title={post.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : post.videoType === "vimeo" && post.videoId ? (
        <div className="video-embed">
          <iframe
            src={`https://player.vimeo.com/video/${post.videoId}`}
            title={post.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}
    </div>
  );
}
