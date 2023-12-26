import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png';


function Logo({width = "150px"}) {
  return (
    <Link
      to={"/"}
      className="flex items-center order-first mb-4 font-medium text-gray-900 md:order-none title-font md:items-center md:justify-center md:mb-0"
    >
        <img className={`w-[${width}]`} src={logo} alt="" />
    </Link>
  );
}
export default Logo;
