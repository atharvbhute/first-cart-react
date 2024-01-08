import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png';


function Logo({width = "150px"}) {
  return (
    <Link
      to={"/"}
      className="font-medium text-gray-900 md:order-none title-font"
    >
        <img className={`w-[150px]`} src={logo} alt="" />
    </Link>
  );
}
export default Logo;
