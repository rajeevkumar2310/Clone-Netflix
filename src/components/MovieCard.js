import { TMDB_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ title, imageKey }) => {
  return (
    <div className="p-2 w-48 md:w-64 cursor-pointer">
      <img
        className="w-48 h-24 md:w-64 md:h-40 rounded-md object-cover"
        src={TMDB_IMAGE_CDN + imageKey}
        alt={title}
      />
      <h1 className="text-white ">{title}</h1>
    </div>
  );
};

export default MovieCard;
