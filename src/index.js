import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes/routes';
import { Provider } from 'react-redux';
import store from './features/reducer';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesApp />
      <GlobalStyle />
    </Provider>
    
  </React.StrictMode>
);