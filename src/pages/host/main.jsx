import { NavLink } from "react-router-dom"
import '../home/home.css'
import { Outlet } from "react-router-dom";
export default function MainH(){
   
    return(
<div className="host">
    <nav className="nav">
<NavLink to='.' end className={({isActive})=>isActive?'Linka':'Link'}>Otherview</NavLink>
<NavLink to='listed_cars' className={({isActive})=>isActive?'Linka':'Link'}>Cars</NavLink>
<NavLink to='reviews' className={({isActive})=>isActive?'Linka':'Link'}>Reviews</NavLink>
        </nav>
<Outlet/>
</div>

    )
    }
