// the main page layout
import Header from "./header";
import './home.css'
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Lay(){
    return(

        <>
        <Header/>
        <main>
        <Outlet/> 
        </main>
     
       <Footer/>
        </>
    )
}