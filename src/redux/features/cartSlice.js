import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../appwrite/authService";

// const fetchUserCart = createAsyncThunk(
//     async
// )

const initialState = {
    userCartCount : 0,
    userCart : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers :{

    }
})