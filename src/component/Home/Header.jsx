import React from "react";
import darkHeroImg from "../../assets/darkModeHero.jpeg";
import lightHeroImg from "../../assets/LightModeHero.jpeg";
import { useSelector } from "react-redux";

function Header() {
  const isDark = useSelector((store) => store.theme);
  return (
    <header className="flex flex-col items-center justify-center md:flex-row md:px-8">
      <div className="mt-56 md:mt-28  md:w-1/2 md:order-2 lg:-ml-[80px]">
        <img src={isDark ? darkHeroImg : lightHeroImg} alt="heroImag"></img>
      </div>
      <div className="w-full md:w-1/2 mt-8 z-20">
        <h1 className="font-bold dark:text-white text-black text-3xl md:text-3xl md:mt-8 lg:text-6xl font-san ">
          Perfect Your Exercise Form,{" "}
          <span className="text-blue-700">Redefine</span> Your Limits
        </h1>
        <h1 className=" dark:text-white text-black my-4  ">
          Embark on your fitness journey with us. Discover a variety of
          exercises for beginners. Start small, progress daily. Your path to a
          healthier you begins here.
        </h1>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 p-2">
          <span className="text-lg">Explore Exercises</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
