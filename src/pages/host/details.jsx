import '../home/home.css'

import { useParams,useOutletContext } from 'react-router-dom'
import Load from '../cars/loader'

export default function Details(props){
    const [valu]=useOutletContext()
   

console.log(valu)
    return(
        <>
        <div className='det'>
            <br/>
            {valu?<h4>Name:<span>{valu.name}</span></h4>:<Load/>}
            {valu?<h4>Category:<span>{valu.category}
                </span></h4>:<Load/>}
           {valu? <h4>Description: <span>{valu.description}</span> </h4>:<Load/>}
        </div>        
        </>
    )
}