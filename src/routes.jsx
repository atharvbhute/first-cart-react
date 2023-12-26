import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import {AddProduct, Login, Signup, Logout, ListProducts} from "./components/index.js"
import App from './App.jsx'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<ListProducts />}/>
      <Route path='/home' element={<ListProducts />}/>
      <Route path='/logout' element={<Logout />} />
      <Route path='/seller/add-products' element={<AddProduct />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
)