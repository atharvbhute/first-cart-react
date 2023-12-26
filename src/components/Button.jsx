import React from 'react'

function Button({type = 'submit', children, width = "w-full"}) {
  return (
    <button type={type} className={`inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 m-2 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm`}>
        {children}
    </button>
  )
}

export default Button