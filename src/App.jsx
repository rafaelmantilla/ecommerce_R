import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
   <>
   <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Welcome/>}/>
      <Route exact path="/catalogo" element = { <ItemListContainer/>}/>
      <Route exact path='/category/:category' element ={<ItemListContainer/>}/>
      <Route exact path= '/detail/:id' element ={<ItemDetailContainer/>}/>
      <Route exact path ="/cart" element = {<Cart/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App
