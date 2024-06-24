import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addPopularMovies } from "../movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
