import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Item from './components/ItemDetailContainer/Item'
function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemsListContainer saludo="Nuestros productos" />} />
        <Route path="/categoria/:idCategoria" element={<ItemsListContainer saludo="Nuestros productos" />} />
        <Route path='/item/:idItem' element={<Item/>}></Route>
      </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
