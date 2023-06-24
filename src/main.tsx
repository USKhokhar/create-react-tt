import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import RoutePage from './RoutePage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/page' element={<RoutePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
