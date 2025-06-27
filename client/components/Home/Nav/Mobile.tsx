import { Nav_Link } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
type props = {
  showNav: boolean;
  closeNav: () => void;
};

const Mobile = ({ closeNav, showNav }: props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Nav_link */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-100 w-[80%] sm:w-[60%] bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900 space-y-6 z-[1050]`}
      >
        {Nav_Link.map((item) => (
          <Link
            className="text-black hover:text-purple-950 font-bold text-lg transition-all duration-200"
            href={item.url}
            key={item.id}
          >
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] border-white sm:text-[30px]">
              {item.label}
            </p>
          </Link>
        ))}

        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6  "
        />
      </div>
    </div>
  );
};

export default Mobile;
