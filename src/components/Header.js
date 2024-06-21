import React from "react";
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute w-full h-28 bg-gradient-to-b from-black px-8 py-2 z-10">
      <div className="">
        <img src={NETFLIX_LOGO_URL} alt="logo" className="w-56" />
      </div>
    </div>
  );
};

export default Header;
