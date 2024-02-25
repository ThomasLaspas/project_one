import '../home/home.css'
import * as React from 'react';
import Load from '../cars/loader';
import List from './list'
import { Link,useLoaderData,defer,Await } from 'react-router-dom'
import {getHostCars} from '../../utilities/fetch'
import { requireAuth } from '../../utilities/auth'

export async function Loaddd({request}){
   await requireAuth(request)

   return defer({cars:getHostCars()}) 

}

export default function Lscars(){
const val=useLoaderData()

function rendCars(cars){
    const a=cars.map(valu=>{
        return(
            <List
            key={valu.id}
            name={valu.name}
            pricce={valu.price}
            img={valu.img}
            id={valu.id}
            />
        )
    })
return(<>
{a}
</>
    
)}
    return(
        <>
        <div className='bla2'>
        <div className='bla'>
            <h2>Your cars</h2>
           <Link to='/host' className='Link'>Back to dashboard</Link> 
        </div>
        </div>
        <React.Suspense fallback={<Load/>}>
            <Await resolve={val.cars}>
                 {rendCars}
                 </Await>
        </React.Suspense><br/>

       </>
    )
}