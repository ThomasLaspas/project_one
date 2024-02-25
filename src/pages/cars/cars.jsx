// main page for cars
import '../../index.css'
import Load from './loader';
import * as React from 'react';
import Main4 from './main'
import { useState } from 'react'
import { useSearchParams,useParams,useLoaderData,defer,Await } from 'react-router-dom'
import { getCars } from '../../utilities/fetch';


export function Loadd(){
    return defer({cars:getCars()}) 

}
export default function Cars(){
const dataPromise=useLoaderData() 
const [search,setsearch]=useSearchParams()
const [error,setEr]=useState(null)
const params=useParams()
let typeFilter=search.get('type')
// the follow code is fetching data instead of useloader
  /* const [val, setVal]=useState([])
useEffect(()=>{
   
    async function loadCars(){
        setLoad(true)
        try{
            const data=await getCars()
            setVal(data)  
        }
        catch(err){
           setEr(err)
        }
        finally{
        setLoad(false)
        }
    }
    loadCars()
},[])*/
function renderCars(cars){
    const display=typeFilter?
    cars.filter(char=>char.type===typeFilter):
    cars

    const a=display.map(val=>{
        return(
            <Main4 
            state={{search4:search.toString(),
            type:typeFilter}}
            id={val.id}
            key={val.id}
            name={val.name}
            price={val.price}
            img={val.img}
            />
        )
    })
    return(<>
   
        <div className='buttons'>
        <button className={typeFilter==='legacy'?'filtersr':'filters'} onClick={()=>setsearch({type:'legacy'})}>
            Legacy
        </button>
        <button className={typeFilter==='sports car'?'filtersr':'filters'} onClick={()=>setsearch({type:'sports car'})}>
            Sports car
        </button>
      {typeFilter?(<button className='filters' onClick={()=>setsearch({})}>
            Reset
        </button>):null}  
        </div>
   <br/>
       <div className='cont'>
             {a}
    </div> 
          </>
    )
}
    return (
        <>
        <React.Suspense fallback={<Load/>}>
             <Await resolve={dataPromise.cars}>
             {renderCars}
             </Await>
        </React.Suspense><br/>
        </>
    )
}