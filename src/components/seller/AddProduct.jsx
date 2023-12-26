import React from 'react'
import { useForm } from 'react-hook-form'
import {Input, Button} from "../index";

function AddProduct() {
  const {register, handleSubmit} = useForm();

  const addProduct = (data) => {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(addProduct)}>
        <Input lable = "product name :" placeholder = "Enter product name" 
        {...register("productname",{
          required: true
        })}/>
        <Button type='submit'>Add Product</Button>
      </form>
    </div>
  )
}

export default AddProduct