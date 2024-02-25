import '../home/home.css'
import { useEffect,useState } from 'react'
import { useParams,useOutletContext } from 'react-router-dom'
import Load from '../cars/loader'


   

export default function Price(){
  
  
const [valu,setValu]=useOutletContext()



    return(
        <>
        <div>
           {valu?<h4>Price:<span>{valu.price}</span></h4>:<Load/>} 
        </div>
        </>
    )
}