import React, { useEffect, useState } from 'react'
import { productService } from '../appwrite/productService';
import {Button} from './index'

function ProductCard({product}) {
  const [image, setImage] = useState("");
  useEffect(() => {
    productService.getFilePreview(product.image)
    .then((image) => {
      setImage(image);
    })
    .catch((err)=> console.log(err));
  }, []);
  return (
    <div className="flex mt-3">
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="rounded-lg object-cover object-center h-[200px]"
            src={image}
            alt="product"
          />
          <p className="my-4 pl-4 text-gray-500">{product.name}</p>
          <div className='flex justify-between items-center text-black'> 
          <p className="ml-4 text-[15px] font-semibold text-gray-800"><span>Rs. </span>{product.price}</p>
          <button className='text-sm bg-blue-600 p-1 rounded-lg text-white hover:bg-blue-900'>Add To Cart</button>
          </div>  
        </div>
      </div>  
    </div>
  );
}

export default ProductCard