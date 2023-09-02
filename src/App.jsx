import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => { 

  const greeting = "Bienvenidos al mejor sitio web de peliculas argentinas"

  return (
    <>

    <NavBar/>
    <ItemListContainer greeting= {greeting} />

    </>
  )
}

export default App
