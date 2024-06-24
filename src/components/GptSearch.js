import React from "react";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { languageConstants } from "../utils/languageConstants";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <img
        alt="background"
        src={NETFLIX_BACKGROUND_IMAGE_URL}
        className="absolute -z-10"
      />
      <div className="pt-36 w-5/12 m-auto">
        <form className="bg-black rounded-md">
          <input
            className="py-2 px-4 m-2 w-3/4 rounded-md"
            type="text"
            placeholder={languageConstants[langKey].gptSearchPlaceHolder}
          />
          <button className="rounded-md py-2 px-6 m-2 text-white bg-red-700 font-semibold">
            {languageConstants[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
