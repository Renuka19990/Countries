import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/authContext.jsx'
import { CountryProvider } from './Context/CountryContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider>
     <AuthProvider>
     <CountryProvider>
    <App />
    </CountryProvider>
    </AuthProvider>
  </ChakraProvider>,
  </BrowserRouter>
)
