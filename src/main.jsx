import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModalContextProvider from './context/ModalContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalContextProvider>
    <App />
  </ModalContextProvider>
)
