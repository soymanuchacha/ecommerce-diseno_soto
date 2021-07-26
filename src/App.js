import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Componentes
import {NavBar} from './components/navBar/navBar';
import {ItemListContainer} from './components/itemListContainer/itemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer greeting="buen shop"/>
        </Route>
        <Route path='/category/:id'>
				  <ItemListContainer greeting="buen shop"/>
				</Route>
				<Route path='/item/:id'>
					<ItemDetailContainer />
        </Route>
        <Route path='/cart'>
					<Cart />
        </Route>
        <Route path='/checkout'>
					<Checkout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


