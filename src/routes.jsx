import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import {AddProduct, Login, Signup, Logout} from "./components/index.js"
import App from './App.jsx'
import { ListProducts } from './pages/index.js'
import {SellerAddProducts} from './pages/index.js'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<ListProducts />}/>
      <Route path='/home' element={<ListProducts />}/>
      <Route path='/logout' element={<Logout />} />
      <Route path='/seller/add-products' element={<SellerAddProducts />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
)