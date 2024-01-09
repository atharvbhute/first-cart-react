import React, { useCallback, useEffect, useMemo, useRef, useState, CSSProperties } from 'react'
import {ProductCard} from "../components/index"
import { productService } from '../appwrite/productService';
import {Container} from './index';
import { getProducts } from '../redux/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';


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
      <ClipLoader
        color={"blue"}
        loading={true}
        cssOverride={{display: "block",
        margin: "0 auto",
        borderColor: "blue",}}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
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