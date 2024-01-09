import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import {AddProduct, Login, Signup, Logout, AuthLayout} from "./components/index.js"
import App from './App.jsx'
import { ListProducts } from './pages/index.js'
import {SellerAddProducts, Cart} from './pages/index.js'


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<ListProducts />}/>
      <Route path='/home' element={<ListProducts />}/>
      <Route path='/logout' element={<Logout />} />
      <Route path='/seller/add-products' element={<AuthLayout authProtection={true}><SellerAddProducts /></AuthLayout>} />
      <Route path='/login' element={<AuthLayout authProtection={false}><Login /></AuthLayout>} />
      <Route path='/signup' element={<AuthLayout authProtection={false}><Signup /></AuthLayout>} />
      <Route path='/cart' element={<AuthLayout authProtection={true}><Cart /></AuthLayout>} />
    </Route>
  )
)