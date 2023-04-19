import React,{useState} from 'react'
import './register.css'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import {validate} from 'react-email-validator';

const  Register=()=>{

    const Navigate = useNavigate();
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",    
    });

  const  handleChange =(e)=>{
    const{name,value}=e.target;   // derefer name and value from input box and setUser according to it
    setUser(
        {
            ...user,   // use spread operator to copy older unchanged data 
            [name]:value    // set changed value z
        })}
        
    const register = () => {
            
            if(user.name && (validate(user.email))  && user.password.length>5 ){
             axios.post("http://localhost:5100/register",user)
            .then( res => {
                alert("Registeration Done")
                Navigate("/login")
            })
            .catch(err=>{
                alert(err.message)
               
            })
        }
        else{
            if(!validate(user.email)){
                alert("enter correct mail")
            }
            else{
            alert("Enter details")
            }
        }
        
    }
    
    return(
        <form>
        <div className='form-container'>
         <h1 className='rg'>SignUp</h1>
         <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Your Name'></input>
            <input type="email" name ="email"value={user.email} onChange={handleChange}  placeholder='Your Email' required></input>
            <input type="password" name="password" value={user.password}  onChange={handleChange} placeholder='Your Password'></input>
            <div className="button" onClick={register}>Signup</div>
            <div className='rg'>or</div>
            <div className="button" onClick={()=>Navigate("/login")}>Login</div>
            
        </div>
        </form>
    )
    }
export default  Register