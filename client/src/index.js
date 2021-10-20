import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import EventProvider from './providers/EventProvider';
import ItemProvider from './providers/ItemProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <EventProvider>
        <ItemProvider>
          <BrowserRouter> 
            <App />
          </BrowserRouter>
        </ItemProvider>
      </EventProvider>  
    </AuthProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
