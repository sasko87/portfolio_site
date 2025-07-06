import React from "react";
import Nav from "./Nav";
import ProfilePicture from "../assets/profile-picture.jpg";

const Sidebar = ({ className, onClick, scrollToSection, active }) => {
  return (
    <aside
      className={`flex flex-col w-1/6 bg-stone-900 p-10 fixed ${className} transform transition-transform duration-500 ease-in-out top-0 bottom-0 left-0 max-lg:top-15`}
    >
      <div className="rounded-full w-full aspect-square bg-amber-50 max-lg:w-2/5  self-center ">
        <img
          src={ProfilePicture}
          alt=""
          className="aspect-square rounded-full"
        />
      </div>
      <Nav
        onClick={onClick}
        scrollToSection={scrollToSection}
        active={active}
      />
    </aside>
  );
};

export default Sidebar;
