import { NavLink } from "react-router-dom"
import '../home/home.css'
import { useState } from "react";
import { Outlet } from "react-router-dom";
export default function MainH(){
   
    return(
<div className="host">
    <nav className="nav">
<NavLink to='/host' end className={({isActive})=>isActive?'Linka':'Link'}>Otherview</NavLink>
<NavLink to='/host/income' className={({isActive})=>isActive?'Linka':'Link'}>Income</NavLink>
<NavLink to='/host/listed_cars' className={({isActive})=>isActive?'Linka':'Link'}>Cars</NavLink>
<NavLink to='/host/reviews' className={({isActive})=>isActive?'Linka':'Link'}>Reviews</NavLink>
        </nav>
<Outlet/>
</div>

    )
    }
