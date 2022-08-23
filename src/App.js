import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Carrito} from './components/Carrito/Carrito';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <ItemListContainer texto="estos son nuestros productos"></ItemListContainer>
    </div>
  );
}

export default App;
