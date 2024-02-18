import React from "react";

// Images
import Quoted from "../assets/images/Quoted.png";
import FP from "../assets/images/FP.png";
import TT from "../assets/images/TT.png";
import JR from "../assets/images/JR.png";
import YN from "../assets/images/YN.png";

const Artist = () => {
  return (
    <div className="pt-10">
      {/* FEATURED ARTIST  */}
      <div className="flex flex-col p-10 justify-center items-center">
        <div className="text-[4vh] text-center font-bold p-5 drop-shadow-2xl">
          FEATURED ARTIST
        </div>
        <div className="flex flex-wrap justify-center mt-5 gap-5">
          <a href="/" className=" p-4 max-w-sm shadow-2xl rounded-lg">
            <img className="w-full" src={FP} alt="Sunset in the mountains" />
            <div className="px-2 py-2">
              <div className="font-bold text-lg mb-2">Françoise Pétrovitch</div>
              <p className="text-gray-700  text-[1.2vh]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia,
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </a>
          <a href="/" className=" p-4 max-w-sm shadow-2xl rounded-lg">
            <img className="w-full" src={TT} alt="Sunset in the mountains" />
            <div className="px-2 py-2">
              <div className="font-bold text-lg mb-2">Tiemar Tegene</div>
              <p className="text-gray-700  text-[1.2vh]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia,
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </a>
          <a href="/" className=" p-4 max-w-sm shadow-2xl rounded-lg">
            <img className="w-full" src={JR} alt="Sunset in the mountains" />
            <div className="px-2 py-2">
              <div className="font-bold text-lg mb-2">Javier Rey</div>
              <p className="text-gray-700  text-[1.2vh]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia,
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </a>
          <a href="/" className=" p-4 max-w-sm shadow-2xl rounded-lg">
            <img className="w-full" src={YN} alt="Sunset in the mountains" />
            <div className="px-2 py-2">
              <div className="font-bold text-lg mb-2">Yoshimoto Nara</div>
              <p className="text-gray-700  text-[1.2vh]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia,
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </a>
        </div>
      </div>
      {/* ARTIST QUOTES */}
      <div className="flex flex-wrap justify-center items-center  h-[auto] bg-bgQuotes  ">
        <img className="p-10 -rotate-6 transf" src={Quoted} alt="" />
        <div className="text-white text-2xl italic p-2 backdrop-blur-sm">
          "I found I could say things with <br />
          color and shapes that I couldn’t say any other way <br /> – things I
          had no words for."
          <br />
          <br />– Georgia O’Keeffe
        </div>
      </div>
    </div>
  );
};

export default Artist;
