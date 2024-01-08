import React from 'react'
import { CartItem } from '../components/index'
import { useSelector } from 'react-redux'

function Cart() {
  const isLoggedIn = useSelector(state =>  state.auth.status);

  return isLoggedIn ? 
  (<><CartItem></CartItem></>) : 

  (
    <div><h2>please login first</h2></div>
  )
}

export default Cart