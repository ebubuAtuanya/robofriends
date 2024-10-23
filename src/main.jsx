import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Containers/App.jsx'
import 'tachyons';
import './index.css';
import HashRouter from 'react-router-dom';




createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
