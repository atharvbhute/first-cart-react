import React from 'react'
import { CartItem } from '../components/index'
import { useSelector } from 'react-redux'

function Cart() {
  const isLoggedIn = useSelector(state =>  state.auth.status);

  return (<div><h2>Cart</h2></div>)
}

export default Cart