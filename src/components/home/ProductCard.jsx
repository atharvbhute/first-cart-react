import React from 'react'

function ProductCard() {
  return (
    <div className="flex mt-3">
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src="https://placehold.co/200x150/png"
            alt="product"
          />
          <p className="my-4 pl-4 text-gray-500">Product Name</p>
          <p className="mb-4 ml-4 text-[15px] font-semibold text-gray-800">$399</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard