import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Header = ({ onClick, className, activeMenu }) => {
  return (
    <header
      className={`flex justify-end  items-end w-full p-4 bg-stone-950 ${className} sticky top-0 z-50 `}
    >
      {!activeMenu ? (
        <GiHamburgerMenu
          className="text-3xl cursor-pointer text-neutral-100 ml-15"
          onClick={onClick}
        />
      ) : (
        <MdClose
          className="text-3xl cursor-pointer text-neutral-100 ml-15 "
          onClick={onClick}
        />
      )}
    </header>
  );
};

export default Header;
