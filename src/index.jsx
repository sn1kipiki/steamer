import React from 'react';
import { MantineProvider } from '@mantine/core'
import 'bootstrap/dist/css/bootstrap.css';

import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <MantineProvider>
    <App />
     </MantineProvider>
  </React.StrictMode>
);

