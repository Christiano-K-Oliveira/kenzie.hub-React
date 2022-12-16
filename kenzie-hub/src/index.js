import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './providers/context';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
