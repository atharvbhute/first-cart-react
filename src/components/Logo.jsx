import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="flex items-center order-first mb-4 font-medium text-gray-900 md:order-none title-font md:items-center md:justify-center md:mb-0">
      firstKart
    </Link>
  );
}

export default Logo;
