import React from 'react'
import { Link } from 'react-router-dom'

function AuthLogin() {
  return (
    <div className='mt-28 flex justify-center items-center'>
        <p className="text-gray-600 mb-6">
          Please login first !{" "}
          <Link to="/login" className="underline">
            click here to login
          </Link>
        </p>
    </div>
  )
}

export default AuthLogin