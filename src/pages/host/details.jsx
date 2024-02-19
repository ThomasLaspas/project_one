import '../home/home.css'
import { useEffect,useState } from 'react'
import { useParams,useOutletContext } from 'react-router-dom'
import Load from '../carss.jsx/loader'

export default function Details(props){
    const [valu,setValu]=useOutletContext()
   

console.log(valu)
    return(
        <>
        <div>
            <br/>
            {valu?<h4>Name:<span>{valu.name}</span></h4>:<Load/>}
            {valu?<h4>Category:<span>{valu.category}
                </span></h4>:<Load/>}
           {valu? <h4>Description: <span>{valu.description}</span> </h4>:<Load/>}
        </div>        
        </>
    )
}