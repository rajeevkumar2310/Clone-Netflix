import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../movieSlice";

const useTopRatedMovies = () => {
  const disptach = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      disptach(addTopRatedMovies(json.results));
    };
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
