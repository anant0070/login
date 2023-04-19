import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import './login.css'
import axios from 'axios'
import Particle  from '../../Particle'
const Login=({setUserhere})=>{
    const Navigate=useNavigate();

    const[user,setUser]=useState({
        email:"",
        password:"",
    });
    
  const  handleChange =(e)=>{
    const{name,value}=e.target;   // derefer name and value from input box and setUser according to it
    setUser(
        {
            ...user,   // use spread operator to copy older unchanged data 
            [name]:value    // set changed value 
        }
    )
  }
  const login=()=>{
    axios.post("http://localhost:5100/login",user)
    .then(res=>{
        alert(res.data.message)
        // console.log(res.data.user);
        setUserhere(res.data.user)
        Navigate("/")   // so that it go on home page again and show data this time
    })
  }
    return(
        

        <div   className='form-containerr'>
            
            <h1 className='lg'>Login</h1>
            <input type="email" name ="email"value={user.email} onChange={handleChange}  placeholder='Enter Email'></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Enter Password'></input>
            <div className="button" onClick={login}>Login</div>
            <div className='lg'>or</div>
            <div className="button" onClick={()=>Navigate("/register")}>Signup</div>
        </div> 
    )
    }
export default Login