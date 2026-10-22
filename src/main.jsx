import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'
import './styles/navbar.css'
import './styles/home.css'
import './styles/about.css'
import './styles/portfolio.css'
import './styles/contact.css'
import './styles/contact.css'
import './styles/frame.css'
import './styles/greet.css'
import './styles/social.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
