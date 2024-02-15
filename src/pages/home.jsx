import '../index.css'
import { Link } from 'react-router-dom'
import Footer from './home/footer'
import Main from './home/main'
import Header from './home/header'
export default function Home(){
    return(
        <> 
      <Header/>
      <Main/>
      <Footer/>
        </>
    )
}