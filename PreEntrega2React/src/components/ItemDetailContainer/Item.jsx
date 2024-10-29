import "./item.css"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../Context/ContextGlobal"
import Counter from "../Counter"
import { CartContext } from "../CartWidget/CartContext"

function Item() {

  const [item, setItem] = useState([])

  const { idItem } = useParams()
  const { data, loading } = useContext(GlobalContext)
  const {cart, addToCart, removeFromCart, checkout, totalItems}= useContext(CartContext)


  useEffect(() => {
    setItem(data.find((gorra) => gorra.id === idItem))
  }, [idItem])

  if (loading) {
    return <h2>Loading...</h2>
  }


  return (
    <div className="container">

      <div className="card" key={item.id}>
        <h2>{item.title}</h2>
        <h2>{item.description}</h2>
        <p>${item.price}</p>
        <p>Stock: {item.stock}</p>
        <Counter stock={item.stock} item={item} />
      </div>

    </div>
  )
}


export default Item