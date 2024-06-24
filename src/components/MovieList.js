import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="font-semibold mx-2 p-2 text-white">{title}</h1>
      <div className="mx-2 flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title || movie.title}
              imageKey={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
