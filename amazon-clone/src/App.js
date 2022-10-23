import './App.css';
import React , {useEffect} from'react'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import {auth} from './basefire'

import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { useStateValue } from './StateProvider';

function App() {
  const [{basket},dispatch]=useStateValue();
  useEffect(()=>{

    auth.onAuthStateChanged(authUser=>{
      console.log("the user is :" , authUser);
      if(authUser){
         dispatch({
          type:"SET_USER",
          user:authUser
         })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
         })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes> 
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/checkout" element={<div><Header/><Checkout/></div>} />
          <Route path="/" element={<div><Header/><Home/></div>} />
        </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
