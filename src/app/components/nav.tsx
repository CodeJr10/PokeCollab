"use client";

import React from "react";
import { navigation } from "@/constants/index";
import { poppins } from "../layout";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const handleClick = () => {
  if (!openNavigation) return;
  // enablePageScroll();
  setOpenNavigation(false);
};

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // enablePageScroll();
    } else {
      setOpenNavigation(true);
      // disablePageScroll();
    }
  };
  const handleRouting = () => {
    router.push("../auth/Signin/");
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b bg-black text-white`}
    >
      {/* logo */}
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a href="#" className="">
          logo
        </a>
      </div>

      {/* links */}
      <nav
        className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
      >
        <div className="relative z-2 flex flex-col items-center justify-center m:auto lg:flex-row">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              // onClick={handleClick}
              className={`block relative ${poppins.className}`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>

      <a href="#" className="">
        New Account
      </a>
      <button onClick={handleRouting}>Sign In</button>
      <label className="relative inline-flex items-center cursor-pointer">
        <input className="sr-only peer" value="" type="checkbox" />
        <div className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
      </label>

      {/* <button className="ml-auto lg:hidden px:3" onClick={toggleNavigation}>
        <MenuSvg openNavigation={openNavigation} />
      </button> */}
    </div>
  );
};

export default Nav;
