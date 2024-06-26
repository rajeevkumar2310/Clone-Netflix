import Header from "./Header";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const gptSearch = useSelector((store) => store.gpt.shouldGptSearch);
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <div className="bg-black">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
