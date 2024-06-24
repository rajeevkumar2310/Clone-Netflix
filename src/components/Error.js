import React from "react";
import Header from "./Header";

const Error = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="fixed w-full my-32">
        <h1 className="font-bold text-3xl text-center">
          Looks like there is some error. Please see console logs for more
          information.
        </h1>
      </div>
    </>
  );
};

export default Error;
