import React from "react";
import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from "../utils/constants";
import { useLocation } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import useManageUser from "../utils/hooks/useManageUser";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isRootOrError = location.pathname === "/";
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute w-full h-28 bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <div className="">
        <img src={NETFLIX_LOGO_URL} alt="logo" className="w-52" />
      </div>
      {!isRootOrError && (
        <div className="flex m-2 p-2">
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
