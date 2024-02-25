import '../../index.css'
import Rating from '@mui/material/Rating';

export default function Review(){
    const reviewsData = [
        {
            rating: 5,
            name: "Thomas",
            date: "January 24, 2024",
            text: "Italian cars is the best, you can feel it inly when you are driving one of them",
            id: "1",
        },
        {
            rating: 5,
            name: "Lewis",
            date: "June 12, 2023",
            text: "Ferrari simple the best with track times faster than everyone. I think im gonna change my style to total red like Ferrary",
            id: "2",
        },
        {
            rating: 4,
            name: "Carlos",
            date: "may 23, 2023",
            text: "I feel like F1 driver without skills but it's ok ",
            id: "3",
        },
    ]

    const reviews=reviewsData.map(rev=>{
        return(
            <div id={rev.id}className='reviewss' >
 <Rating name="read-only" value={rev.rating} readOnly size="large"/>
 <div className='details'>
    <h1>{rev.name} <span id='span'>{rev.date}</span></h1>
    <p>{rev.text}</p>
 </div>


            </div>
        )
    })

    return(
       <>
       <div className='reviews'>
       <h1>Reviews (3)</h1>
        {reviews}
       </div>
      
       </>
    )
}