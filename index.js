import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import Context from './components/context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Context>
    <App />
    </Context> 
  
  </React.StrictMode>
);

