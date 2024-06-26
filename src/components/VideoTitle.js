import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 md:pt-96 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="ml-12 text-xl md:text-6xl w-1/2 font-bold text-white">
        {title}
      </h1>
      <p className="ml-12 text-lg w-1/2 pt-8 text-white hidden md:block">
        {overview}
      </p>
      <div className="ml-12 flex">
        <button className=" text-xs md:text-base px-4 md:px-10 py-2 m-4 bg-white text-black rounded-sm  font-semibold hover:opacity-70">
          Play
        </button>
        <button className="hidden md:block text-xs md:text-base px-4 md:px-10 py-2 m-4 bg-gray-500 text-white bg-opacity-20 rounded-sm font-semibold hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
