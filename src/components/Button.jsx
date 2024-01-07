import React from 'react'

function Button({type = 'submit', children, className=""}) {
  return (
    <button type={type} className={`w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none ${className}`}>
        {children}
    </button>
  )
}

export default Button