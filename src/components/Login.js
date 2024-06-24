import React, { useState, useRef } from "react";
import Header from "./Header";
import {
  NETFLIX_USER_IMAGE_URL,
  NETFLIX_BACKGROUND_IMAGE_URL,
} from "../utils/constants";
import validateForm from "../utils/validateForm";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const dispatch = useDispatch();
  const handleValidateForm = () => {
    const message = validateForm(
      signUp,
      name?.current?.value,
      email?.current?.value,
      password?.current?.value,
      confirmPassword?.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (signUp) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: NETFLIX_USER_IMAGE_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          const { uid, displayName, email, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              displayName: displayName,
              email: email,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          alt="background"
          src={NETFLIX_BACKGROUND_IMAGE_URL}
          className="absolute"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black bg-opacity-85 w-4/12 mx-auto my-36 right-0 left-0 rounded-sm px-10 pt-10 pb-20"
        >
          <h1 className="font-bold text-3xl text-white m-2 p-2">
            {signUp ? "Sign Up" : "Sign In"}
          </h1>
          {signUp && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
          />
          {signUp && (
            <input
              ref={confirmPassword}
              type="password"
              placeholder="Confirm Password"
              className="rounded-sm m-2 p-3 text-gray-500 border border-gray-500 w-11/12 bg-black"
            />
          )}
          <p className="text-red-600 m-2 p-2">{errorMessage}</p>
          <button
            onClick={handleValidateForm}
            className="font-semibold cursor-pointer bg-red-700 rounded-sm m-2 p-2 text-white text-center w-11/12"
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>
          <p
            onClick={() => {
              setSignUp(!signUp);
            }}
            className="text-white text-center mx-2 my-10 cursor-pointer font-semibold"
          >
            {signUp
              ? "Already registered? Sign in now."
              : "New to Netflix? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
