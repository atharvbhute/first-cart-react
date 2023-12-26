import React, {useId} from 'react'

function Input({type = "text", placeholder, className = '', label, ...props }, ref) {
    const id = useId();
  return (
    <>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} placeholder={placeholder} className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 ${className}`} ref={ref}{...props}  />
    </>
  )
}

export default React.forwardRef(Input);