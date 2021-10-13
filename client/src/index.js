import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </AuthProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
