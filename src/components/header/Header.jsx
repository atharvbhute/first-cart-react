import React from 'react'
import { Link } from 'react-router-dom'
import {Logo, AuthBtn} from '../index'

function Header() {

    const navigator = [
        {
            page : "Home",
            to : "/",
            isActive : false
        },
        {
            page : "Become Seller",
            to : "/seller/add-products",
            isActive : false
        },
    ]
  return (
    <div>
        <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
            <nav className="flex flex-wrap items-center text-base md:w-2/5 md:ml-auto">
                {navigator.map((link)=>(
                    <Link key={`${link.page}`} to={link.to} className="mr-5 font-sm hover:text-gray-900">{link.page}</ Link>
                ))}
            </nav>
            <Logo></Logo>
            <AuthBtn />
        </div>
    </header>
    </div>
  )
}

export default Header