import Footer from './home/footer'
import '../index.css'
import Header from './home/header'
import Main4 from './carss.jsx/main'
import { useEffect, useState } from 'react'
export default function Cars(){

    const [val, setVal]=useState([])
useEffect(()=>{
    fetch('/api/cars')
    .then(res => res.json())
    .then(data =>setVal(data.cars))
},[])



const a=val.map(val=>{
    return(
        <Main4 
      
        id={val.id}
        key={val.id}
        name={val.name}
        price={val.price}
        img={val.img}
        />
    )
})

    return (
        <>
       <br/>
        <div className='cont'>
{a}</div><br/>
        
        </>
    )
}