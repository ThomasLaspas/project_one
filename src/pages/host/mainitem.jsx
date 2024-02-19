import '../home/home.css'
import Load from '../carss.jsx/loader';
import { NavLink } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import { Outlet,useOutletContext } from "react-router-dom";
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function Mainls(){
    const params=useParams()
    const [valu,setValu]=useState(null)
    useEffect(()=>{
        fetch(`/api/host/listed_cars/${params.id}`)
        .then(res=>res.json())
        .then(data=>setValu(data.cars))
    },[params.id])
   

console.log(valu)


    return(
        <>
        
        <div className='list'>


<div className='carlist' id='car'>
    <div className='first'>
{valu?<img src={valu.img} height={300} width={300}/>:<Load/>}
        <div>
      {valu?<h1>{valu.name}</h1>:<Load/>} 
      {valu? <h3>{valu.price}</h3>:<Load/>}
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
    <Outlet context={[valu,setValu]}/>
    
</div>
</div><br/><br/>
        </>
    )
}