import React, { useRef, useState,useEffect } from "react";
import logo from "../assets/FA_logo_white.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, Links } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  
   const [menuOpen , setMenuOpen] = useState(false)
   const [navDark, setNavDark] = useState(false);



  const navbarRef = useRef(null);
  //gsap hook
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -80,
      duration: 3,
    });
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavDark(true);
      } else {
        setNavDark(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 w-full mix-blend-difference z-50 ${navDark ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <div className="main-container py-2 flex justify-between items-center">
          <img src={logo} alt="" className="h-18" />
          <div className="  flex flex-col gap-1.5 " onClick={()=>setMenuOpen(!menuOpen)}>
            <span className={`inline-block  w-8 lg:w-10 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen?"rotate-45 translate-y-[4px]":''}`}></span>
            <span className={`inline-block  w-8 lg:w-10 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen?"-rotate-45 -translate-y-[4px]":''}`}></span>
          </div>
        </div>
      </nav>
      {/* full screen menu */}
      <div className={`fixed z-30 inset-0 bg-black text-white flex flex-col justify-center items-center gap-8  transition-transform duration-500  ${menuOpen?"translate-y-0":"translate-y-full"} `} onClick={()=>setMenuOpen(false)}  >
        <Link to="/" className="menu-link">Home</Link>
        <Link to="/projects" className="menu-link">Projects</Link>
        <a href="" className="menu-link">Contact</a>
      </div>
    </>
  );
};

export default Navbar;
