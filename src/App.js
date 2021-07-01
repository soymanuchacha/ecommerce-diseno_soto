import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {NavBar} from './components/navBar/navBar';
import {ItemListContainer} from './components/itemListContainer/itemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';

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
      </Switch>
    </BrowserRouter>
  );
}


