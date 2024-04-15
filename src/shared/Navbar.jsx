import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { InlineIcon } from "@iconify/react";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const activePage = window.location.pathname;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;
  //     const scrollThreshold = 260;
  //     setIsScrolled(scrollTop > scrollThreshold);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (isMobileNavOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  };

  return (
    <header
      className={`h-20 w-full flex items-center justify-between pt-4 pb-4 pl-4 pr-4 border-b-2 bg-white  `}
    >
      <div className="h-12 w-12">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div
        className={`nav-links md:flex gap-10 text-lg font-semibold ${
          isMobileNavOpen ? "show" : ""
        }`}
      >
        <Link to={"/"} className={activePage === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to={"/work"} className={activePage === "/work" ? "active" : ""}>
          My Work
        </Link>
        <Link
          to={"/about-me"}
          className={activePage === "/about-me" ? "active" : ""}
        >
          About Me
        </Link>
      </div>

      {isMobileNavOpen && (
        <div className="overlay" onClick={closeMobileNav}></div>
      )}

      <button className="btn-mobile-nav md:hidden" onClick={handleButtonClick}>
        <InlineIcon
          icon={isMobileNavOpen ? "akar-icons:cross" : "quill:hamburger"}
          className="icon-mobile-nav"
          name="menu-outline"
        />
      </button>
    </header>
  );
};

export default Navbar;
