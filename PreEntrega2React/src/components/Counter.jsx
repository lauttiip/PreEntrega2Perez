import { useState, useContext } from "react"
import { CartContext } from "./CartWidget/CartContext"


function Counter({ stock, initial = 1, item }) {

  const [count, setCount] = useState(initial)
  const { cart, addToCart, removeFromCart, checkout, totalItems } = useContext(CartContext)
  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart(item, count)
  }

  return (
    <div className="counter">
      <button onClick={handleDecrease} disabled={count === 1}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrease} disabled={count === stock}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default Counter
