import '../home/home.css'
import Footer from '../home/footer'
import rarri from '../home/rarri.jpeg'
import Header from '../home/header'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Final from './finalc'
import Load from './loader'

export default function One(){
    const[valu,setValu]=useState(null)
    const params=useParams()
   
   
    useEffect(()=>{
        fetch(`/api/cars/${params.id}`)
        .then(res=>res.json())
        .then(data=>setValu(data.cars))
    },[params.id])
   

console.log(valu)

/*const a=valu.map((val)=>{
    return(
    <Final
   name={val.name}
   price={val.price}
   img={val.img}
   con={val.description}
   
   />)
})*/

    return (<div className='one'>
<Header/><br/>
<div className='finalc'>
   {valu?(
     <Final
     name={valu.name}
     price={valu.price}
     img={valu.img}
     con={valu.description}
     
     />
   ):<Load/>}
   <br/> <br/><button className="btn" type="button" >Button</button> <br/>
</div><br/> <br/>
<Footer/>


    </div>)
}