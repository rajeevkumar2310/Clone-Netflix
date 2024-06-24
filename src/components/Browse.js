import Header from "./Header";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {/* 
      Main container
       - video background
       - Video Title

       Secondary container
        - movieList * n
         -cards * n

      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
