import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../appwrite/productService";

const initialState = {
  displayProducts : [],
  status : 'idle'
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
    .addCase(getProducts.fulfilled, (state, action) => {
        state.displayProducts = action.payload;
        state.status = "fulfilled"
    })
  }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async()=>{
    const result = await productService.getProducts();
    const allProducts = result.documents;
    return allProducts;
})
