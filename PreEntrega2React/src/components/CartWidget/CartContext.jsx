import { createContext, useState } from "react"
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id)

      if (existingProduct) {
        const totalQuantity = existingProduct.quantity + quantity

        if (totalQuantity > product.stock) {
          Swal.fire({
            title: 'Error!',
            text: `No se pueden añadir más de ${product.stock} unidades de este producto.`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          return prevCart
        }

        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: totalQuantity }
            : item
        )
      } else {
        if (quantity > product.stock) {
          Swal.fire({
            title: 'Error!',
            text: `No se pueden añadir más de ${product.stock} unidades de este producto.`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          return prevCart
        }
        return [...prevCart, { ...product, quantity }]
      }
    })
  }

  const removeFromCart = productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }
  const removeAllFromCart = () => {
    setCart([])
  }


  const checkout = () => {
    setCart([])
    Swal.fire({
      title: 'Compra confirmada!',
      text: `Su compra ha sido realizada con exito`,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, checkout, totalItems, removeAllFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
