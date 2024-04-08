import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" h-20 w-ful flex  items-center justify-between pt-4 pb-4 pl-20 pr-20 border-b-2">
      <div className="h-12 w-12">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex gap-10 text-lg">
        <a href="#">Home</a>
        <a href="#">Work</a>
        <a href="#">About Me</a>
      </div>
    </div>
  );
};

export default Navbar;
