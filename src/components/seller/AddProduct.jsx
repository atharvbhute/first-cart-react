import React from 'react'
import { useForm } from 'react-hook-form'
import {Input, Button} from "../index";

function AddProduct() {
  const {register, handleSubmit} = useForm();

  const addProduct = (data) => {
    console.log(data);
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-xl font-semibold mb-4">List you product</h1>
        <p className="text-gray-600 mb-6">
          Become seller on India's biggest E-commerce platform
        </p>
        <div className="mb-4">
          <form action="" className="space-y-2">
            <Input
              lable="product name :"
              placeholder="Enter product name"
              {...register("product_name", {
                required: true,
              })}
            />
            <Input
              lable="Brand :"
              placeholder="Brand"
              {...register("brand", {
                required: true,
              })}
            />
            <textarea
              name="message"
              rows="5"
              cols=""
              placeholder="Product description"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
              {...register("description", {
                required: true,
              })}></textarea>
              <Input
              lable="Price :"
              placeholder="Price"
              {...register("price", {
                required: true,
              })}
            />
            <Button type="submit">Add Product</Button>
          </form>
        </div>
      </div>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit(addProduct)}>
    //     <Input lable = "product name :" placeholder = "Enter product name"
    //     {...register("productname",{
    //       required: true
    //     })}/>
    //
    //   </form>
    // </div>
  );
}

export default AddProduct