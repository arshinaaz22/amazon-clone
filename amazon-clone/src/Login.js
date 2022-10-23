import React , {useState}from 'react'
import './Login.css'
import { Link , useNavigate} from 'react-router-dom'
import {auth} from './basefire.js'

function Login() {

  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const signIn=(e)=>{
     e.preventDefault();
     auth
     .signInWithEmailAndPassword(email,password)
     .then((auth)=>{
      if(auth){
        navigate('/')
      }
     })
     .catch(err=>alert(err.message));
  }
  const register=e=>{
     e.preventDefault(); 
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          //console.log(auth);
          if(auth){
            navigate('/')
          }
        })
        .catch(err=>alert(err.message))
    
  }


  return (
    
      <div className='login'>
        <Link to='/'>
          <img  className='login__logo'src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=""/>
        </Link>

       <div className='login__container'>
         <h1>Sign-in</h1>
         <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}></input>
            <h5>Password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
            <button type="submit" onClick={signIn} className='login__signInButton'>Continue</button>
         </form>

         <p>
           By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
         </p>
         <div className="new">
         <h4 >New to Amazon?</h4>
         </div>
        
         <button onClick={register} className='login__registerButton'>Create your Amazon Accoubt</button>

      </div>

      
      </div>
  
   
   
  )
}

export default Login
