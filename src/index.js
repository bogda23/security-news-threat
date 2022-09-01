import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, connect } from 'react-redux';


//Connect components to redux


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //</Provider>
);

