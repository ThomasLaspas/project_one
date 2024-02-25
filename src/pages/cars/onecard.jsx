// single car card page
import '../home/home.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useParams,useLocation,NavLink,useLoaderData,Await,defer } from 'react-router-dom'
import Final from './finalc'
import Load from './loader'
import {getCarsd} from '../../utilities/fetch'
import * as React from 'react';

export function Load3({params}){

    return defer({cars:getCarsd(params.id)}) 
}


export default function One(){
const loc=useLocation()
const valu=useLoaderData()
//function that create car component
function rendCar(cars){
    return(
<Final
     name={cars.name}
     price={cars.price}
     img={cars.img}
     con={cars.description}
 />
    )
}

    return (
    <div className='one'>
    <NavLink
     className='back'
     to={`..?${loc.state.search4}`}
      relative='path'>
    <KeyboardBackspaceIcon/>Back to {loc.state.type} cars</NavLink>

    <div className='finalc'>
    <React.Suspense fallback={<Load/>}>
            <Await resolve={valu.cars}>
                 {rendCar}
                 </Await>
        </React.Suspense>
     
   
   <br/><br/><button className="btn" type="button" >Button</button> <br/>
</div>



    </div>)
}