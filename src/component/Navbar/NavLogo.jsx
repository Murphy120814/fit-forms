import React from "react";
import darkLogo from "../../assets/fitFormsSymbolDarkMode.png";
import lightLogo from "../../assets/fitFormSymbolLightMode.png";
import { useSelector } from "react-redux";

function NavLogo() {
  const isDark = useSelector((store) => store.theme);
  return (
    <>
      <a href="/" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          <img
            src={isDark ? darkLogo : lightLogo}
            alt="logoFitForm"
            className="max-w-none w-[80px] h-[80px]"></img>
        </span>
      </a>
    </>
  );
}

export default NavLogo;
