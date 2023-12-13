import React, { useState } from 'react';

const SignUp = () => {

  const [name,setname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState();

  const helperSubmit =(e)=>{
    // e.preventDefault();
    

  }
  return (
    <div className='register'>
    <h1 style={{marginLeft: "126px"}}>Register</h1>
        <input className="inputText" value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder='Enter name'></input>
        <input className="inputText" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter Email'></input>
        <input className="inputText" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password'></input>
        <button type='submit' onClick={helperSubmit} className='btn-signup'>Sign Up</button>
    </div>
  )
}

export default SignUp