import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Carrito} from './components/Carrito/Carrito';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';


function App() {

  const agregar = (contador)=>{
    console.log(`productos agregados:${contador}`)
  }

  return (
    <div className="App">
     <Header/>
     <ItemListContainer stock={10} inicial={1} agregarCarrito={agregar}></ItemListContainer>
    </div>
  );
}

export default App;
