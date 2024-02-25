//main host page
import '../../index.css'
import { Link,useLoaderData } from 'react-router-dom'
import List from './list'
import {getHostCars} from '../../utilities/fetch'
import { requireAuth } from '../../utilities/auth'

export async function Load2({request,params}){
    //pas request in auth component
    await requireAuth(request)
    return getHostCars(params.id)

}

export default function Host(){
   
  const val=useLoaderData()
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
            <Link to='/host/listed_cars' className='Link'>view all</Link>
        </div>
        </div>
      {a}<br/>
       </>
    )
}