import React, { useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiSearchAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";

const NavSm = () => {
  const { movie } = useContext(MovieContext);

  return (
    <>
      <div>
        <h3>{movie.original_title}</h3>
      </div>
      <div>
        <BiShareAlt className="w-full h-full" />
      </div>
    </>
  );

  // return <div>MovieNavbar</div>;
};

const MovieNavbar = () => {
  return <>Movie Navbar</>;
};

export default MovieNavbar;
