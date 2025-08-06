import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {library} from "@fortawesome/fontawesome-svg-core"
import { faBars, faBolt, faBookOpen, faShoppingCart, faTags, faTimes } from "@fortawesome/free-solid-svg-icons"

library.add(faBars, faShoppingCart, faTimes,faBolt,faBookOpen,faTags)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
