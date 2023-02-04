import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
   <>
   <NavBar/>
   <ItemListContainer greeting={"Bienvenido al ecommerce del Abecedario, donde encontrarás todas las letraas al mejor precio."}/>
   </>
  )
}

export default App
