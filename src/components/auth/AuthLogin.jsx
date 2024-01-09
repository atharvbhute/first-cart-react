import React from 'react'
import { Link } from 'react-router-dom'

function AuthLogin() {
  return (
    <div className='mt-28 flex justify-center items-center'>
        <p className="text-gray-600 mb-6">
          Please login to continue
        </p>
        <p>
            <Link to="/login" className='underline'>Login here</Link>
        </p>
    </div>
  )
}

export default AuthLogin