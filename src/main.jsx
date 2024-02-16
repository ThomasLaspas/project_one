import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home'
import './index.css'
import Cars from './pages/cars';
import One from './pages/carss.jsx/onecard';
import './server'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/cars' element={<Cars/>}/>
<Route path="/cars/:id" element={<One/>}/>
  </Routes>
  </BrowserRouter>
</React.StrictMode>
)
