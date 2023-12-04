import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import { AuthContextProvider } from './login/store/auth-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </AuthContextProvider>
);