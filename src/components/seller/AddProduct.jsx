import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Input, Button, Select} from "../index";
import { productService } from '../../appwrite/productService';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const {register, handleSubmit, control, formState: {errors}, setError, clearErrors} = useForm();
  const [options, setOptions] = React.useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    productService.listCategories()
    .then((productLists)=>{setOptions(productLists)})
  },[])

  const addProduct = async(data) => {
    console.log(data);
    if (
      data.file[0]?.type == "image/jpg" ||
      data.file[0]?.type == "image/jpeg"
    ) {
      try {
        const file = await productService.uploadImage(data.file[0]);
        if (file) {
          const product = await productService.createProduct({
            ...data,
            image: file.$id,
          });
          console.log("product added successfuly");
          navigate("/");
        }
      } catch (error) {
        setError("service_error",{type: "custom", message: error})
        setTimeout( () => clearErrors("service_error"), 10000)
      }
    } else {
      setError("file", { type: "custom", message: "file must be jpg" });
    }
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-xl font-semibold mb-4">List you product</h1>
        <p className="text-gray-600 mb-6">
          Become seller on India's biggest E-commerce platform
        </p>
        <div className="mb-4">
        
        {errors.service_error && <p className='text-white text-sm bg-red-500 rounded-md p-2'>{errors?.service_error?.message.message + " try again in 10 seconds"}</p>}
          <form onSubmit={handleSubmit(addProduct)} className="space-y-2">
            <Input
              lable="product name :"
              placeholder="Enter product name"
              {...register("product_name", {
                required: "product name is required",
              })}
            />
            <p className='text-red-900 text-sm'>{errors?.product_name?.message}</p>
            <Input
              lable="Brand :"
              placeholder="Brand"
              {...register("brand", {
                required: "brand name is required",
              })}
            />
            <p className='text-red-900 text-sm'>{errors?.brand?.message}</p>
            <textarea
              name="message"
              rows="5"
              cols=""
              placeholder="Product description"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
              {...register("description", {
                required: "product description is required",
              })}></textarea>
              <p className='text-red-900 text-sm'>{errors?.description?.message}</p>
              <Input
              lable="Price :"
              placeholder="Price"
              {...register("price", {
                required: "price is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Price must be a number"
                },
                min: {
                  value : 1,
                  message: "Price must not be 0 or less"
                }
              })}
            />
            <p className='text-red-900 text-sm'>{errors?.price?.message}</p>
            <Input
              type="file"
              lable="product image :"
              placeholder="Product image"
              {...register("file", {
                required: "product image is required",
              })}
            />
            <p className='text-red-900 text-sm'>{errors?.file?.message}</p>
            <Select 
            control={control}
            options={options} 
            {...register("category_id", {
              required: "please select the category",
            })}
            />
            <p className='text-red-900 text-sm'>{errors?.category_id?.message}</p>
            <Button type="submit">Add Product</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct