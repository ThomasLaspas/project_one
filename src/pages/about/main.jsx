//component for main about page
import '../home/home.css'
import rar from './rarri2.jpeg'

export default function Main2(){
    return(
        <div className='main2'>
            <div className='text'>

            <img src={rar} alt=""  className='rar'/>
            <h1>Dont waste your life, in bring cars,
                you can drive a Ferrari
            </h1><br/> <br/>
        <p>
               Ferrari’s racing spirit lives on in emotions that transcend the road and the track, ultimately becoming an authentic attitude towards life. Nothing excites us more than setting ambitious targets and expectations – 
               and then exceeding them, to push every boundary. 
               It is how the power of passion becomes the beauty of 
               achievement.
               </p>
               <div><br/>
                <button>Explore our cars</button>
               </div><br/><br/>
        </div>
        </div>
    )
}