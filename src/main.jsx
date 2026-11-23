import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

AOS.init({ once: true, duration: 800, offset: 40, easing: "ease-out-cubic" })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WhatsAppButton />
  </StrictMode>,
)

