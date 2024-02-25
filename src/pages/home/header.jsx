import '../../index.css'
import './home.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header(){
function logout(){
localStorage.clear('key')
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
    <NavLink className={({isActive})=>isActive?'Linka':'Link'} to='/cars'> <h1>Cars</h1>   </NavLink>
    <NavLink className={({isActive})=>isActive?'Linka':'Link'} to='/login'> <h1><AccountCircleIcon id='small' fontSize='large'/></h1>   </NavLink>
    <button style={{border:'none',backgroundColor:'transparent',cursor:'pointer'}}  onClick={logout}><CloseOutlinedIcon id='small' fontSize="large"/></button>
    </div>
       
        
       </div>


    )
}