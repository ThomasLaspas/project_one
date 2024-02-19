import '../home/home.css'
import List from './list'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Lscars(){

    const [val, setVal]=useState([])
    useEffect(()=>{
        fetch('/api/host/listed_cars')
        .then(res => res.json())
        .then(data =>setVal(data.cars))
    },[])
    console.log(val)
    const a=val.map(valu=>{
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
    return(
        <>
        <div className='bla2'>
        <div className='bla'>
            <h2>Your cars</h2>
           <Link to='/host' className='Link'>Back to dashboard</Link> 
        </div>
        </div>
        {a}<br/>

       </>
    )
}