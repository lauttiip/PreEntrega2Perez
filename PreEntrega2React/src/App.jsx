import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Item from './components/ItemDetailContainer/Item'
import  {ContextGlobal}  from './Context/ContextGlobal'
import { CartProvider } from './components/CartWidget/CartContext'
import CheckOut from './components/CheckOut/CheckOut'
function App() {

  return (
    <>
        <CartProvider>
      <BrowserRouter>
        <ContextGlobal>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemsListContainer saludo="Nuestros productos" />} />
            <Route path="/categoria/:idCategoria" element={<ItemsListContainer saludo="Nuestros productos" />} />
            <Route path='/item/:idItem' element={<Item />}></Route>
            <Route path='/checkOut' element={<CheckOut />}></Route>
          </Routes>
        </ContextGlobal>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
