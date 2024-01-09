import React, { useCallback, useEffect, useMemo, useRef, useState, CSSProperties } from 'react'
import {ProductCard, PageLoader} from "../components/index"
import { productService } from '../appwrite/productService';
import {Container} from './index';
import { getProducts } from '../redux/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';


function ListProducts() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.displayProducts);
  const productLoadingState = useSelector(state => state.products.status)
  console.log(products);

  useEffect(()=>{
    dispatch(getProducts());
  },[]);

  const printData = (data)=>{
    console.log(data);
  }

  if (productLoadingState != "fulfilled") {
    return (
      <div className='h-screen flex items-center'>
        <PageLoader />
      </div>
      
    )
  }else{
    return (
      <>
        <Container>
          <div className="flex flex-wrap justify-center">
            {products.map((product) => {
              return <ProductCard product={product} key={product.$id} />;
            })}
          </div>
        </Container>
      </>
    );
  }
}

export default ListProducts