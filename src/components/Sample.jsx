import React,{ forwardRef } from 'react'

function Sample({prop}, ref) {
  return (
    <div>
        <select ref={ref} name="" id="">
            <option value="tea">tea</option>
            <option value="tea">one</option>
            <option value="tea">two</option>
        </select>
    </div>
  )
}

export default forwardRef(Sample);