import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home'
import './index.css'
import Cars from './pages/cars';
import One from './pages/carss.jsx/onecard';
import './server'
import Price from './pages/host/price';
import Photos from './pages/host/photos';
import Host from './pages/host';
import Lay from './pages/home/layoutH';
import Review from './pages/reviews';
import Income from './pages/income';
import MainH from './pages/host/main';
import Lscars from './pages/host/listedcars';
import Mainls from './pages/host/mainitem';
import Details from './pages/host/details';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route  path='/'element={<Lay/>}>
    <Route index element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='cars' element={<Cars/>}/>
<Route path="cars/:id" element={<One/>}/>

<Route path='host' element={<MainH/>}>
<Route index element={<Host/>}/>
<Route path='income' element={<Income/>}/>
<Route path='reviews' element={<Review/>}/>
<Route path='listed_cars' element={<Lscars/>}/>
<Route path="listed_cars/:id" element={<Mainls/>}>
<Route index element={<Details/>}/>
<Route path="photos" element={<Photos/>}/>
<Route path='price' element={<Price/>}/></Route>
</Route>
    </Route>
 
  </Routes>
  </BrowserRouter>
</React.StrictMode>
)
