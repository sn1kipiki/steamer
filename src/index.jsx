import { MantineProvider } from '@mantine/core'
import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/reset.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <MantineProvider>
    <App />
     </MantineProvider>
  </React.StrictMode>
);

