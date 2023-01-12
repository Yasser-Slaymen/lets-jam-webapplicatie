import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrismicProvider } from '@prismicio/react'
import { client } from '../src/lib/Utils/prismic'
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <PrismicProvider client={client}>
     <App />
    </PrismicProvider>
  </React.StrictMode>
);

