import React from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
      <Header />
      <div>
        <img
          alt="background"
          src={NETFLIX_BACKGROUND_IMAGE_URL}
          className="absolute"
        />
        {signUp ? (
          <form className="absolute bg-black bg-opacity-85 w-4/12 mx-auto my-36 right-0 left-0 rounded-sm px-10 pt-10 pb-20">
            <h1 className="font-bold text-3xl text-white m-2 p-2">Sign Up</h1>
            <input
              type="text"
              placeholder="Name"
              className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
            />
            <input
              type="text"
              placeholder="Email or mobile number"
              className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
            />
            <button className="font-semibold cursor-pointer bg-red-700 rounded-sm m-2 p-2 text-white text-center w-11/12">
              Sign Up
            </button>
            <p
              onClick={() => {
                setSignUp(!signUp);
              }}
              className="text-white text-center mx-2 my-10 cursor-pointer font-semibold"
            >
              Already registered? Sign in now.
            </p>
          </form>
        ) : (
          <form className="absolute bg-black bg-opacity-85 w-4/12 mx-auto my-36 right-0 left-0 rounded-sm px-10 pt-10 pb-20">
            <h1 className="font-bold text-3xl text-white m-2 p-2">Sign In</h1>
            <input
              type="text"
              placeholder="Email or mobile number"
              className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
            />
            <button className="font-semibold cursor-pointer bg-red-700 rounded-sm m-2 p-2 text-white text-center w-11/12">
              Sign In
            </button>
            <p className="text-gray-400 mx-2 my-10">
              New to Netflix?
              <span
                onClick={() => {
                  setSignUp(!signUp);
                }}
                className="cursor-pointer font-semibold text-white"
              >
                Sign up now.
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
