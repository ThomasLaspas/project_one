import '../../index.css'
import '../home/home.css'
import { Link } from 'react-router-dom'


export default function Header(){
function back(){

}

    return(
       <div className='header'>
<div className='logo'>
<Link className='Link' to='/'> <img src="https://static-00.iconduck.com/assets.00/ferrari-icon-1443x2048-g5ixcdse.png" alt="Rarri"width={100} height={100} />  </Link>  
<h1 className='fer'>Ferrari</h1>
</div>
<div className='links'>
    <Link className='Link' to='/about'> <h1>About</h1>   </Link> 
    <Link className='Link' to='/cars'> <h1>Cars</h1>   </Link></div>

        
       </div>


    )
}