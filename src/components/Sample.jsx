import React,{ forwardRef } from 'react'

function Sample({prop}, ref) {
  return (
    <div ref={ref}>
        <select name="" id="">
            <option value="tea">tea</option>
            <option value="tea">tea</option>
            <option value="tea">tea</option>
        </select>
    </div>
  )
}

export default forwardRef(Sample);