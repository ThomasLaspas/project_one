import '../home/home.css'
import { useLoaderData,Form,useActionData,useNavigation,redirect } from 'react-router-dom'
import { loginUser } from '../../utilities/fetch'



export  async function action({request}){
    //take tha data from the form 
    const datax= await request.formData()
    // we can take a specific value using the name of input
    const email=datax.get('email')
    const password=datax.get('password')
    localStorage.setItem('name',email)
    //redirect to the page tha we are in before logout
    const pathnme=new URL(request.url).searchParams.get('redirect') || '/host'
    //handle erros
    try{
        const data = await loginUser({email,password})
        localStorage.setItem('key',true)
        return window.location.href = (pathnme);
    }catch(err){
        return err.message
    }   
}


//function that return the message from the url
export function loader({request}){
    return new URL(request.url).searchParams.get('message')
}

export default  function Login(){
    //take the message from the url. If the url came from protected routes
    const message=useLoaderData()
    const error=useActionData()
    const navi=useNavigation()
    console.log(navi.state)

if(localStorage.getItem('key')){
    
    return(
        <div className='login' >
             <h1>Hello there {localStorage.getItem('name')} </h1><br/>
             
        </div>
     
    )
}else{
    return(
        <div className='login' >
    <h1> Sign to your acount</h1>
    {message?<h2>{message}</h2>:null}
    {error?<h2 style={{color:'red'}}>{error}</h2>:null}
    
    <Form method='post' replace >
          
          <input 
          id='email'
            type="email" 
            name="email" 
            placeholder='Email address'
            required
          /><br/>
         
         
            <input 
            required
            id='pas'
              type="password" 
              name="password" 
              placeholder='Password'
        
            /><br/>
         
           <input type="submit"  id='in' value={navi.state==='submitting'?'':'Sign in'} disabled={navi.state==='submitting'} />
        </Form>
    <p> Don you have an acount? <span style={{color:'rgb(161, 0, 0)',
    cursor:'pointer'}}>Create one now</span></p>
        </div>
        )
}
    

}