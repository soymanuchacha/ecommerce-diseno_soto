import React from 'react';
import ReactDOM from 'react-dom';
// Components
import { CartProvider } from './context/cartContext'
import { App } from './App';
// Styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
