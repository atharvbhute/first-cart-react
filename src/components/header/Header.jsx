import React from 'react'
import { Link } from 'react-router-dom'
import {Logo, AuthBtn, CartBtn} from '../index'

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
        <div className="flex justify-around p-3 items-center">
            <nav className="">
                {navigator.map((link)=>(
                    <Link key={`${link.page}`} to={link.to} className="mr-5 font-sm hover:text-gray-900">{link.page}</ Link>
                ))}
            </nav>
            <Logo></Logo>
            <div className= "flex">
            <CartBtn />
            <AuthBtn />
            </div>            
        </div>
    </header>
    </div>
  )
}

export default Header