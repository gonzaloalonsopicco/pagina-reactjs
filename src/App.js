import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
     <Header/>
     <ItemListContainer/>
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
