import React,{useId, forwardRef} from 'react'
import { Controller } from 'react-hook-form';

const Select = forwardRef(function Select({options= [], label = "Select_Category", control},ref) {
  const id = useId();
  return (
    <>
    <div> 
    <label htmlFor={id} className='hidden'>{label}</label>
   <Controller
    name="category_id"
    control={control}
    render={({field : {ref, onChange}}) => {
    return (
      <select
        ref={ref}
        onChange={onChange}
        name="category_id"
        id={id}
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
      >
        {options.map((option) => (
          <option key={option.$id} value={option.$id}>
            {option.categories}
          </option>
        ))}
      </select>
    );
    }}
   />
    </div>
    </>
  )
})

export default Select;