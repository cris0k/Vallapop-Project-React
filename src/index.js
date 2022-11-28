import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/index.css';
import App from './App';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import { AuthContextProvider } from './components/auth/Context';

const accessToken = storage.get('auth')
setAuthorizationHeader(accessToken)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AuthContextProvider isInitiallyLogged={!!accessToken}>
      <App  />
      </AuthContextProvider>
    </Router>
    
  </React.StrictMode>
);