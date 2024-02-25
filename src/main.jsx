import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import About from './pages/about/about';
import Home from './pages/home/home'
import './index.css'
import Cars,{Loadd} from './pages/cars/cars';
import One,{Load3} from './pages/cars/onecard';
import './server'
import Price from './pages/host/price';
import Photos from './pages/host/photos';
import Host,{Load2} from './pages/host/host';
import Lay from './pages/home/layoutH';
import Review from './pages/reviews/reviews';
import MainH from './pages/host/main';
import Lscars,{Loaddd} from './pages/host/listedcars';
import Mainls,{Load4} from './pages/host/mainitem';
import Details from './pages/host/details';
import Error,{Error2} from './utilities/error';
import Login,{action,loader} from './pages/loginform/loginpage';
import { requireAuth } from './utilities/auth';

const router=createBrowserRouter(createRoutesFromElements(
  <Route  path='/'element={<Lay/>} errorElement={<Error2/>}>
  <Route path='*' element={<Error/>}/>
<Route index element={<Home/>} />
<Route path='about' element={<About/>}/>
<Route path='cars' element={<Cars/>} loader={Loadd} />
<Route path="cars/:id" element={<One/>} loader={Load3}/>
<Route path="login" element={<Login/>} loader={loader} action={action}/>

<Route path='host' element={<MainH/>}  loader={async ({request})=> await requireAuth(request)}
  >
<Route index element={<Host/>} loader={Load2} />
<Route path='reviews' element={<Review/>}  loader={async ({request})=> await requireAuth(request)}/>
<Route path='listed_cars' element={<Lscars/>} loader={Loaddd}/>
<Route path="listed_cars/:id" element={<Mainls/>} loader={Load4}>
<Route index element={<Details/>} loader={async ({request})=> await requireAuth(request)}/>
<Route path="photos" element={<Photos/>} loader={async ({request})=> await requireAuth(request)}/>
<Route path='price' element={<Price/>} loader={async ({request})=> await requireAuth(request)}/></Route>
</Route>
</Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
