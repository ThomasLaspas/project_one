import'../home/home.css'
import { Link } from 'react-router-dom'

export default function List(props){
  
return(
    <>
   
    <Link style={{textDecoration: 'none'}} to={`${props.id}`} >
<div className='list'>


    <div className='carlist'>
        
    <div className="cards">
<div className="img">
  <img  src={props.img} width={200} height={200}/>
</div>
<div className="textBox">
<div className="textContent">
  <p className="h1">{props.name}</p>
  <Link className='Link' id='li' to='/cars'>Car</Link>
</div>
<p className="p"> {props.des}</p>
<div>
</div></div></div>

   </div>
   </div> </Link> </>)
}


