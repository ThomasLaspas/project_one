import '../../index.css'
import './home.css'
import { NavLink } from 'react-router-dom'


export default function Header(){
function back(){

}

    return(
       <div className='header'>
<div className='logo'>
<NavLink className='Link' to='/'> <img src="https://static-00.iconduck.com/assets.00/ferrari-icon-1443x2048-g5ixcdse.png" alt="Rarri"width={100} height={100} />  </NavLink>  
<h1 className='fer'>Ferrari</h1>
</div>
<div className='links'>
<NavLink className={({isActive})=>isActive?'Linka':'Link'} to='/host'> <h1>Host</h1>   </NavLink>
    <NavLink className={({isActive})=>isActive?'Linka':'Link'} to='/about'> <h1>About</h1>   </NavLink> 
    <NavLink className={({isActive})=>isActive?'Linka':'Link'} to='/cars'> <h1>Cars</h1>   </NavLink></div>

        
       </div>


    )
}