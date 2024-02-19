import React from "react";
import { NavLink } from "react-router-dom";

// images

const Landing = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center bg-bgHome bg-cover bg-center h-[65vh]">
        <div className="text-[3vh] md:text-[5vh] lg:text-[12vh] xl:text-[16vh] 2xl:text-[20vh] font-extrabold animate-text bg-gradient-to-r from-red-600 via-blue-200 to-amber-400  bg-clip-text text-transparent p-10 drop-shadow-2xl opacity-75 ">
          A R T L M
        </div>
      </div>
      <div className="flex flex-col pt-12 ">
        <div className="text-3xl drop-shadow-lg text-gray-900 p-2 font-semibold text-center capitalize ">
          Colors and Inspiration that sorrounds your home.
        </div>
        <div className="container p-8 mx-0 min-w-full flex flex-col items-center  ">
          <Link
            href="/gallery"
            className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none "
          >
            See Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
