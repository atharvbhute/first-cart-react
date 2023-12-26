import React from "react";
import { Link } from "react-router-dom";

function Footer() {

    const navigator = [
      {
        page: "Home",
        to: "/",
        isActive: false,
      },
      {
        page: "Become Seller",
        to: "/seller/add-products",
        isActive: false,
      },
      {
        page: "About",
        to: "/about",
        isActive: false,
      },
      {
        page: "Contact",
        to: "/contact",
        isActive: false,
      },
    ];

  return (
    <div className="max-w-2xl mx-auto">
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©
          <Link
            to="/"
            className="hover:underline"
            target="_blank"
          >
            FirstKart
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
            {navigator.map((link) => (
                <li key={link.page}>
                <Link
                  to={`${link.to}`}
                  className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                >
                  {link.page}
                </Link>
              </li>
            ))}
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
