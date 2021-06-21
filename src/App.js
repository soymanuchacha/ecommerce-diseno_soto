import './App.css';
import {NavBar} from './components/navBar/navBar';
import {ItemListContainer} from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="hero">
        <ItemListContainer greeting="buen shop."/>
      </section>


    </div>
  );
}

export default App;
