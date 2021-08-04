import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import { NavBar } from './components/navBar/navBar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { NoMatch } from './components/noMatch/noMatch';
import { Footer } from './components/footer/footer';
// Styles
import './styles/scss/app.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer greeting="buen shop" />
        </Route>
        <Route path='/category/:id'>
				  <ItemListContainer greeting="buen shop" />
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
        <Route path="*">
	        <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}


