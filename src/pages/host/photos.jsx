import '../home/home.css'
import { useEffect,useState } from 'react'
import { useParams,useOutletContext } from 'react-router-dom'
import Load from '../carss.jsx/loader'


 
export default function Photos(){
    const [valu,setValu]=useOutletContext()
    return(
        <>
        <div>
           {valu?<img src={valu.img} alt="rarri"  width={400} height={300}/>:<Load/>} 
        </div>
        </>
    )
}