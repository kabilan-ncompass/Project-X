import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    // const submitData=async ()=> {
    //     const data=await axios.
    // }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={submitData}>
            <label htmlFor="username">Username</label> <br />
            <input type="text" required="true" autoComplete='false'
            placeholder="Enter Username"
            onChange={(e)=>{setUsername(e.target.value)}}
            value={username}
            /><br />
            <label htmlFor="password">Passowrd</label> <br />
            <input type="password" required="true" autoComplete='false' 
            placeholder='Enter Password'
            onChange={(e)=> {setPassword(e.target.value)}}
            value={password}
            /> <br /> <br />

            <button>Login</button>
        </form>
    </div>
  )
}
