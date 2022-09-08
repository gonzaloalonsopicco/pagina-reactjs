import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from './components/Header/Header';
import {InicioContainer} from './components/InicioContainer/InicioContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { FiltroContainer } from './components/FiltroContainer/FiltroContainer';
import {CarritoContainer} from './components/CarritoContainer/CarritoContainer'

function App() {

  return (
    <BrowserRouter>

      <div className="App">

        <Header />
        <Routes>
          <Route path='/' element={<InicioContainer />} ></Route>
          <Route path='/productos' element={<ItemListContainer />} ></Route>
          {/* <Route path='/contacto' element={<ItemDetailContainer />} ></Route> */}
          <Route path='/productos/:categorias' element={<ItemListContainer />} ></Route>
          <Route path='/item/:ids' element={<ItemDetailContainer />} ></Route>
          <Route path='/carrito' element={<CarritoContainer />} ></Route>
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;

