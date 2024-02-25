import '../home/home.css'
import { useParams,useOutletContext } from 'react-router-dom'
import Load from '../cars/loader'


 
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