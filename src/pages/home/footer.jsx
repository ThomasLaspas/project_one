import '../../index.css'
export default function Footer(){
//change the year automatically
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
    return(
       



       <div className='footer'>

<h2> © {currentYear} Scuderia Ferrari</h2>

        
       </div>
      

    )
}