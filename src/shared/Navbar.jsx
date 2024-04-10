import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const activePage = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 260;
      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-20 w-ful flex  items-center justify-between pt-4 pb-4 pl-20 pr-20 border-b-2 bg-white  ${
        isScrolled
          ? "bg-white bg-opacity-30 transition-all duration-1000 backdrop-filter backdrop-blur-md py-6 top-0 fixed w-full z-10"
          : "bg-blue py-6 transition-all duration-1000"
      } `}
    >
      <div className="h-12 w-12">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-10 text-lg font-semibold	">
        <Link to={"/"} className={activePage === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to={"/work"} className={activePage === "/work" ? "active" : ""}>
          Work
        </Link>
        <Link
          to={"/about-me"}
          className={activePage === "/about-me" ? "active" : ""}
        >
          About Me
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
