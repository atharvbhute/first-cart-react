import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AuthBtn() {
  const isLoggedIn = useSelector(state =>  state.auth.status);

  return isLoggedIn ? (
      <div className="flex items-center h-full ml-5 md:w-2/5 md:ml-0">
        <Link to="/logout" className="mr-5 font-medium hover:text-gray-900">
          Logout
        </Link>
      </div>
  ) : (
    <div className="flex items-center ml-5">
      <Link to="/login" className="mr-5 font-medium hover:text-gray-900">
        Login
      </Link>
      <Link
        to="/signup"
        className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default AuthBtn;
