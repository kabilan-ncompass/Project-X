import React from 'react'
import { useState } from 'react'
import axios from 'axios';
// import { unstable_HistoryRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [msg,setMsg]=useState('')
    const history = useNavigate();
  
    const submitData=async (e)=> {
        e.preventDefault()
        let value = {
            username,
            password
        }
        const data=(await axios.post("http://localhost:3000/user",value)).data
        setMsg(data);
        console.log(data)
        if(data === "Loginin success"){
            history(`/dashboard/${username}`);
        } else {
          setMsg("Invalid Username or Password");
        }
    }
  return (
    <div>
        <h1>Login</h1>
        
        <form onSubmit={submitData}>
            <label htmlFor="username"><b>Username</b></label> <br />
            <input type="text"  autoComplete='false'
            placeholder="Enter Username"
            onChange={(e)=>{setUsername(e.target.value)}}
            value={username}
            /><br /> 
            <span>{msg}</span>
            <br />
            <label htmlFor="password"><b>Password</b></label> <br />
            <input type="password"  autoComplete='false' 
            placeholder='Enter Password'
            onChange={(e)=> {setPassword(e.target.value)}}
            value={password}
            /> <br /> 
            <span>{msg}</span>
            <br />
            <button class="button-login">Login</button>
        </form>
    </div>
  )
}
