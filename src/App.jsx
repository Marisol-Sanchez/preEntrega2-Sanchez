import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => { 

  const greeting = "Bienvenidos al mejor sitio web de peliculas argentinas"

  return (
  <>
  <BrowserRouter>

    <NavBar/>

    <Routes> 

      {/*<ItemListContainer/>*/}
      {/*ItemDetailContainer*/}

      <Route exact path= "/" element= {<Home/>} />
      <Route exact path= "/cart" element= {<Cart/>} />
      <Route exact path= "/categorias/:categorias" element= {<ItemListContainer/>} />


      {/* */}


    </Routes>
  
  </BrowserRouter>
  </>
  )
}

export default App
