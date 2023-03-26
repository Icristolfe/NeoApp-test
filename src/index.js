import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes/routes';
import { Provider } from 'react-redux';
import store from './features/reducer';
import GlobalStyle from './styles/GlobalStyle';
import { CartProvider } from './features/CartContext';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
    autoClose={500}
    theme="dark"
    position="top-left" />
    <CartProvider>
    <Provider store={store}>
      <RoutesApp />
      <GlobalStyle />
    </Provider>
    </CartProvider>
    
  </React.StrictMode>
);