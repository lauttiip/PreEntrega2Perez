import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { gorras } from "../../data/productos"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"



function ItemsListContainer() {

  const [data, setData]=useState([])
  const [loading, setLoading]=useState(true)

  const {idCategoria}=useParams()


  useEffect(() => {
    const traerProductos = () => {
      setLoading(true)
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(gorras)
        },1000)
      })
    }

    traerProductos().then(res => {
      setLoading(false)
      if(idCategoria){
        const newGorras = res.filter((gorra) => gorra.categoria === idCategoria)
        setData(newGorras)
      }else {setData(res)}
    })
  },[idCategoria])

  if(loading){
    return <h2>Loading...</h2>
  }


  return (
    <div className="container">
      {data.map(prod => (

        <Link to={'/item/'+ prod.id}>
          <div className="card" key={prod.id}>
            <h2>{prod.nombre}</h2>
            <h2>{prod.descripcion}</h2>
            <p>{prod.precio}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ItemsListContainer