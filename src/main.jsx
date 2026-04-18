import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
// import Login from './pages/Login.jsx'
// import ResumeBuilder from './pages/ResumeBuilder.jsx'
// import Preview from './pages/Preview.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
)
