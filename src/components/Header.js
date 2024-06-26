import React from "react";
import {
  NETFLIX_LOGO_URL,
  NETFLIX_USER_ICON,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import useManageUser from "../utils/hooks/useManageUser";
import { toggleShouldGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isRoot = location.pathname === "/";
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.shouldGptSearch);
  useManageUser();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleShouldGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full h-16 md:h-28 bg-gradient-to-b from-black px-8 pt-2 z-10 flex flex-col md:flex-row justify-between ">
      <div className="mx-auto md:mx-0">
        <img src={NETFLIX_LOGO_URL} alt="logo" className="w-52" />
      </div>
      {!isRoot && (
        <div className="flex p-2 items-center justify-between">
          {gptSearch && (
            <select
              className="px-4 py-2 mx-2 bg-gray-800 text-white rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 m-2 bg-purple-700 text-white rounded-md"
            onClick={handleGptSearchClick}
          >
            {gptSearch ? "Browse Movies" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 "
            alt="user icon"
            src={user?.photoURL || NETFLIX_USER_ICON}
          />
          <button
            onClick={handleSignOut}
            className="mx-2 my-auto p-2 text-white font-bold"
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
