import React from "react";
import { Link } from "react-scroll";
import { FaLocationDot } from "react-icons/fa6";
import "./Banner.css";

const Banner = () => {

  return (
    <div className="flex flex-col font-notoSerif mt-40 mx-auto w-fit text-center items-center font-merriWeather">
      <div>
        <p className="text-base md:text-2xl text-yellow-200 font-semibold">
          Shree Ganesh Utsav Samithi, Sacramento invites you to
        </p>

        <h1 className="text-2xl md:text-6xl text-yellow-300 font-bold tracking-wider mt-2 md:mt-6 uppercase">
          Ganesh Chaturthi
        </h1>
        <p className="text-xs md:text-lg text-yellow-200 font-semibold md:mt-4">
          6th September through 14th September
        </p>
      </div>

      <div className="flex gap-2 items-center mt-4">
        <FaLocationDot size={15} />
        <div className="text-xs">
          <p className="self-center md:text-lg whitespace-nowrap text-yellow-200">
            Masonic Center, 1000 Duchow Way, Forlsom, CA 99560
          </p>
        </div>
      </div>

      <button
        type="button"
        className="text-green-800 w-fit bg-neutral-400 hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mt-4 text-center"
      >
        <Link to={"donations"} smooth={true} duration={500}>
          Donate Now
        </Link>
      </button>
    </div>
  );
};

export default Banner;
