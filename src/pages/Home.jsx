import React from 'react'
import {ProductCard} from "../components/index"

function ListProducts() {
  return (
    <>
    <div className='flex flex-wrap justify-center'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    </>
    
  )
}

export default ListProducts