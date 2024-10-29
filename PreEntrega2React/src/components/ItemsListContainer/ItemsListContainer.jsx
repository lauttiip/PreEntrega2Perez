import "./ItemListContainer.css"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../Context/ContextGlobal"



function ItemsListContainer() {

  const { data, loading } = useContext(GlobalContext)
  const [dataGorras, setDataGorras] = useState([])

  const { idCategoria } = useParams()


  useEffect(() => {
    const traerProductos = () => {
      if (idCategoria) {
        const newGorras = data.filter((gorra) => gorra.categoryId === idCategoria)
        setDataGorras(newGorras)
      } else {
        setDataGorras(data)
      }
    }
    traerProductos()
  }, [data, idCategoria])

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="container">
      {
        dataGorras.map(prod => (
          <Link to={'/item/' + prod.id} key={prod.id}>
            <div className="card">
              <h2>{prod.title}</h2>
              <h2>{prod.description}</h2>
              <p>{prod.price}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default ItemsListContainer