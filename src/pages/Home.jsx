import React, { useEffect, useRef, useState } from 'react'
import {ProductCard} from "../components/index"
import { productService } from '../appwrite/productService';
import Sample from '../components/Sample';
import { useForm } from 'react-hook-form';

function ListProducts() {
  const [products, setProducts] = useState([])
  const sampleRef = useRef(null);
  const {register, handleSubmit} = useForm();

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
    <form onSubmit={handleSubmit(printData)}>
    <Sample ref={sampleRef}
    {
      ...register("sample")
    }/>
    <button type='submit'>Sub</button>
    </form>
    
    </>
    
    
  )
}

export default ListProducts