import React from "react";
import Nav from "./Nav";

const Sidebar = () => {
  return (
    <aside className="flex flex-col h-screen w-1/6 bg-stone-900 p-10 fixed max-lg:hidden">
      <div className="rounded-full w-full aspect-square bg-amber-50"></div>
      <Nav />
    </aside>
  );
};

export default Sidebar;
