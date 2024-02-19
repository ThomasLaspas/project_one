import '../index.css'
import { Link } from 'react-router-dom'
import MainH from './host/main'
import List from './host/list'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
export default function Host(){
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
        )})
    return(
       <>
      
       <div className='up'>
<h1>Welcome!</h1><br/>
<p>You total amount is:</p><br/>
<h3>$3.456</h3>
       </div>
       <div className='down'>
       <h3> you gona receive $1.000 next week</h3>
       </div><br/>
       <div className='bla2'>
        <div className='bla'>
            <h2>Your cars</h2>
            <Link to='/host/listed_cars'>view all</Link>
        </div>
        </div>
      {a}<br/>
       </>
    )
}