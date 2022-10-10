import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { InicioContainer } from './components/InicioContainer/InicioContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CarritoContainer } from './components/CarritoContainer/CarritoContainer';
import { CartProvider } from './context/CartContext';
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<InicioContainer />} ></Route>
          <Route path='/productos' element={<ItemListContainer />} ></Route>
          <Route path='/productos/:categorias' element={<ItemListContainer />} ></Route>
          <Route path='/item/:ids' element={<ItemDetailContainer />} ></Route>
          <Route path='/carrito' element={<CarritoContainer />} ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

