import '../home/home.css'
import { useEffect,useState } from 'react'
import { useParams,useOutletContext } from 'react-router-dom'
import Load from '../carss.jsx/loader'


   

export default function Price(){
   /* const params=useParams()
    const [valu,setValu]=useState(null)
    useEffect(()=>{
        fetch(`/api/host/listed_cars/${params.id}`)
        .then(res=>res.json())
        .then(data=>setValu(data.cars))
    },[params.id])*/
const [valu,setValu]=useOutletContext()



    return(
        <>
        <div>
           {valu?<h4>Price:<span>{valu.price}</span></h4>:<Load/>} 
        </div>
        </>
    )
}