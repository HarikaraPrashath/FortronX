"use client";
import { Nav_Link } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SiBmcsoftware } from "react-icons/si";
import { HiBars3BottomRight } from "react-icons/hi2";

type props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.screenY >= 90) setNavBg(true);
      if (window.screenY < 90) setNavBg(false);
    };
    return () => window.addEventListener("scroll", handler);
  });
  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white shadow:md" : "fixed"
      }duration-200 h-[12vh] z-[100] fixed w-full bg-white`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          {/* Icon Circle */}
          <div className="w-12 h-12 bg-gradient-to-tr from-blue-700 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
            <SiBmcsoftware className="w-6 h-6 text-white" />
          </div>

          {/* Brand Name */}
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-500 hidden sm:block">
            FortronX
          </h1>
        </div>

        {/* NavLink */}

        <div className="hidden lg:flex items-center space-x-10">
          {Nav_Link.map((item) => (
            <Link
              className="text-black hover:text-blue-500 font-bold text-lg transition-all duration-200"
              href={item.url}
              key={item.id}
            >
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 rounded-lg shadow-lg hover:via-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out backdrop-blur-md group"
          >
            <span className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              <span className="transition-colors duration-300 group-hover:text-white">
                Make Schedule
              </span>
            </span>
          </a>

          {/* burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-point text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
