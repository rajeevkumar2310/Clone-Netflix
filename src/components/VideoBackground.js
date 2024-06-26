import React from "react";
import { useSelector } from "react-redux";
import useGetTrailerVideo from "../utils/hooks/useGetTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  useGetTrailerVideo(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=QZUg6ecgZvq0eNRw&controls=0&mute=1&autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
