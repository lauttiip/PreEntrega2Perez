import React from 'react'
import { FaCartShopping } from "react-icons/fa6"
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../CartWidget/CartContext"

function CartWidget() {
  const {cart, addToCart, removeFromCart, checkout, totalItems}= useContext(CartContext)

  return (
    <div className='carrito'>
      <FaCartShopping size="40px"/> 
      <span className='badge'>{totalItems}</span>
    </div>
  )
}

export default CartWidget