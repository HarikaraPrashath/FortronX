"use client"
import React, { useState } from "react";
import MobileNave from "./Mobile";
import Navbar from "./Navbar";

const Responce = () => {
const [showNav, setShowNav] = useState(false);

  const openMenuHandler = () => setShowNav(true);
  const closeMenuHandler = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={openMenuHandler} />
      <MobileNave showNav={showNav} closeNav={closeMenuHandler} />
    </div>
  );

}

export default Responce
