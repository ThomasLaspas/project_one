import '../home/home.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import rarri from '../home/rarri.jpeg'
import { Link, useParams } from 'react-router-dom';
 export default function Main4(props) {

 
return(
    <>

  
    <div className="card">
     <Link to={`/cars/${props.id}`} onClick={props.click} ><img src={props.img} className="card-img-top" alt="..."/> </Link> 
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
       <h4>${props.price}</h4>
      </div>
    </div>
  
 

    
    </>
)
}