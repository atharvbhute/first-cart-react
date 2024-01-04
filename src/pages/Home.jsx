import React, { useEffect, useRef, useState } from 'react'
import {ProductCard} from "../components/index"
import { productService } from '../appwrite/productService';
import Sample from '../components/Sample';

function ListProducts() {
  const [products, setProducts] = useState([])
  const sampleRef = useRef(null);

  useEffect(()=>{
    console.log(sampleRef.current);
  },[sampleRef])

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
  return (
    <>
    <div className='flex flex-wrap justify-center'>
      {products.map((product) => {
        return <ProductCard product={product} key={product.$id}/>
      })}
    </div>
    <Sample ref={sampleRef}/>
    </>
    
    
  )
}

export default ListProducts