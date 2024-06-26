import React, { useEffect, useRef } from "react";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { languageConstants } from "../utils/languageConstants";
import MovieList from "./MovieList";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieSuggestions, deleteMovieSuggestions } from "../utils/gptSlice";
import openai from "../utils/openai";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const movieList = useSelector((store) => store.gpt.movieSuggestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteMovieSuggestions());
  }, []);

  const getMovieSuggestions = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results[0];
  };

  const handleGptSearchClick = async () => {
    dispatch(deleteMovieSuggestions());
    if (searchText?.current?.value) {
      const query =
        "act as movie recommendation system and suggest some movies for the query: " +
        searchText?.current?.value +
        ". Recommend 5 movie names comma separated without numbering like example as follows: sholay, don, golmaal, pk, koi mil gaya";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      const gptMovies = gptResults?.choices[0]?.message?.content?.split(", ");
      const promiseArray = gptMovies.map((movieName) =>
        getMovieSuggestions(movieName)
      );
      const movieSuggestions = await Promise.all(promiseArray);
      dispatch(addMovieSuggestions(movieSuggestions));
    }
  };

  return (
    <div className="">
      <img
        alt="background"
        src={NETFLIX_BACKGROUND_IMAGE_URL}
        className="fixed -z-10 object-cover h-screen w-screen"
      />
      <div className="pt-48 md:pt-36 w-full md:w-6/12 m-auto ">
        <form
          className="bg-black rounded-md flex justify-evenly"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            className="py-2 px-4 m-2 w-[70%] rounded-md"
            type="text"
            placeholder={languageConstants[langKey].gptSearchPlaceHolder}
          />
          <button
            className="rounded-md py-2 px-4 m-2 text-white bg-red-700 font-semibold w-[20%]"
            onClick={handleGptSearchClick}
          >
            {languageConstants[langKey].search}
          </button>
        </form>
      </div>
      {movieList?.length && (
        <div className="mt-20 font-bold text-xl text-white bg-black bg-opacity-80 p-10">
          <MovieList title={"Movie Suggestions"} movies={movieList} />
        </div>
      )}
    </div>
  );
};

export default GptSearch;
