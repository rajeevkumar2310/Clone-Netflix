import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movie?.nowPlayingMovies
  );
  const topRatedMovies = useSelector((store) => store?.movie?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movie?.upcomingMovies);
  const popularMovies = useSelector((store) => store?.movie?.popularMovies);
  if (!(nowPlayingMovies || topRatedMovies || upcomingMovies || popularMovies))
    return;

  return (
    <div className=" bg-black">
      {/* We will have multiple movie lists 
    i.e., movie List * n
    Each Movie List will contain multiple movie cards
    */}
      <div className="-mt-24 relative z-10">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
