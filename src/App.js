import './App.css';
import {NavBar} from './components/navBar/navBar';
import {ItemListContainer} from './components/itemListContainer/itemListContainer';

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <section className="hero">
        <ItemListContainer greeting="buen shop."/>
        {/*<ItemDetailContainer />*/}
      </section>


    </div>
  );
}


