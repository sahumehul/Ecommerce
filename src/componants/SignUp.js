import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [name,setname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState();
  const navigate =useNavigate()

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate("/")
    }
  })

  const handleSubmit =(e)=>{
    // e.preventDefault();
    axios.post("http://localhost:5000/register",{
      name : name,
      email : email,
      password : password
    }).then((res)=>{
      console.log(res.data);
      alert("Successfully account created");
      localStorage.setItem("user",res.data.email)
      navigate("/");
    }).catch((err)=>{
      alert("Email already exist")
    })

  }
  return (
    <div className='register'>
    <h1 style={{marginLeft: "126px"}}>Register</h1>
        <input className="inputText" value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder='Enter name'></input>
        <input className="inputText" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter Email'></input>
        <input className="inputText" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password'></input>
        <button type='submit' onClick={handleSubmit} className='btn-signup'>Sign Up</button>
    </div>
  )
}

export default SignUp