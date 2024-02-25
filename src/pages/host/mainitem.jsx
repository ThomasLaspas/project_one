import '../home/home.css'
import Load from '../cars/loader';
import * as React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { Outlet,Await,defer } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {getCarsd} from '../../utilities/fetch'
import { requireAuth } from '../../utilities/auth';


export  async function Load4({params,request}){
    await requireAuth(request)
    return defer({cars:getCarsd(params.id)}) 
}
export default function Mainls(){
    const params=useParams()
  const valu=useLoaderData()

  function rendCar(cars){
return(<>
<div className='list'>


<div className='carlist' id='car'>
    <div className='first'>
<img src={cars.img} height={300} width={300}/>
        <div>
      <h1>{cars.name}</h1>
    <h3>{cars.price}</h3>
        </div>
    </div>
    <div className='edit'>
    <nav id='nav'>
<NavLink to='.' end className={({isActive})=>isActive?'Linka':'Link'}>Details</NavLink>
<NavLink to='price' className={({isActive})=>isActive?'Linka':'Link'}>Pricing</NavLink>
<NavLink to='photos' className={({isActive})=>isActive?'Linka':'Link'}>Photos</NavLink>

        </nav>
        <EditIcon id='icon'/>
    </div>
    <Outlet context={[cars]}/>
    
</div>
</div>
</>)
  }

 
    return(
        <>
        <React.Suspense fallback={<Load/>}>
            <Await resolve={valu.cars}>
                 {rendCar}
                 </Await>
        </React.Suspense>
        <br/><br/>
        </>
    )
}