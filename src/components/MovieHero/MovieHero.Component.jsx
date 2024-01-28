import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  //   console.log(genres);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="cover photo"
      />
    </div>
  );
};

export default MovieHero;
