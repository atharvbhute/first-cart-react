import React, { useEffect, useMemo, useRef, useState } from 'react'
import {ProductCard} from "../components/index"
import { productService } from '../appwrite/productService';

function ListProducts() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    ;(async()=>{
      try {
        const allProducts = await productService.getProducts();
        if (allProducts) {
          setProducts(allProducts.documents);     
        }
      } catch (error) {
        console.log(error);
      }
    })()
  },[]);

  const printData = (data)=>{
    console.log(data);
  }
  return (
    <>
    <div className='flex flex-wrap justify-center'>
      {products.map((product) => {
        return <ProductCard product={product} key={product.$id}/>
      })}
    </div>    
    </>   
  )
}

export default ListProducts