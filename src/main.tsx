import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/provider/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
