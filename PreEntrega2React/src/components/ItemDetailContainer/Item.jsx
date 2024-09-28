import "./item.css"
import { useState, useEffect } from "react"
import { gorras } from "../../data/productos"
import { useParams } from "react-router-dom"

function Item() {
    
    const [data, setData]=useState([])
    const [loading, setLoading]=useState(true)
  
    const {idItem}=useParams()
  
  
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
          const newGorras = res.filter((gorra) => gorra.id === parseInt(idItem))
          setData(newGorras)
          console.log(newGorras)

        }
      )
    },[idItem])
  
    if(loading){
      return <h2>Loading...</h2>
    }
  
    return (
        <div className="container">
        
            <div className="card" key={data[0].id}>
              <h2>{data[0].nombre}</h2>
              <h2>{data[0].descripcion}</h2>
              <p>{data[0].precio}</p>
            </div>
 
      </div>
    )
}


export default Item