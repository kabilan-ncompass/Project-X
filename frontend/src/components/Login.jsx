import React from 'react'
import { useState } from 'react'
import axios from 'axios';
// import { unstable_HistoryRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const history = useNavigate();
  
    const submitData=async (e)=> {
        e.preventDefault()
        let value = {
            username,
            password
        }
        const data=(await axios.post("http://localhost:3000/user",value)).data
        console.log(data)
        if(data === "Loginin success"){
            history(`/dashboard/${username}`);
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={submitData}>
            <label htmlFor="username">Username</label> <br />
            <input type="text"  autoComplete='false'
            placeholder="Enter Username"
            onChange={(e)=>{setUsername(e.target.value)}}
            value={username}
            /><br />
            <label htmlFor="password">Passowrd</label> <br />
            <input type="password"  autoComplete='false' 
            placeholder='Enter Password'
            onChange={(e)=> {setPassword(e.target.value)}}
            value={password}
            /> <br /> <br />
            <button>Login</button>
        </form>
    </div>
  )
}