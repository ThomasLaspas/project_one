// its a component for one card page
export default function Final(props){

    return(
        <>
       <img src={props.img} alt="" /><br/>
       <h1> {props.name}</h1><br/>
       <h3>{props.price}</h3><br/>
       <p>{props.con}</p>
        
        </>
    )
}





