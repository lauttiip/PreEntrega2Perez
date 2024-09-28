import React from 'react'
import { FaCartShopping } from "react-icons/fa6"
function CardWidget() {
  return (
    <div className='carrito'>
      <FaCartShopping size="40px"/> 
      <span className='badge'>2</span>
    </div>
  )
}

export default CardWidget