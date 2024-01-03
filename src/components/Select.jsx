import React,{useId, useState, forwardRef} from 'react'

const Select = forwardRef(function Select({options= [], label = "Select_Category"},ref) {
  const id = useId();
  console.log(ref.current);
  return (
    <>
    <div ref={ref}> 
    <label htmlFor={id} className='hidden'>{label}</label>
    <select id={id} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700">
        {options.map((option)=> (
            <option key={option.$id} value={option.$id}>
                {option.categories}
            </option>
        ))}
    </select>
    </div>
    </>
  )
})


export default Select;