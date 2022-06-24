import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { toast } from 'react-toastify';


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate();

    const submitData = async (e) => {
        e.preventDefault()
        let value = {
            username,
            password
        }
        const data = (await axios.post("http://localhost:3000/user/login", value)).data
        console.log(data)
        if (data.access_token) {
            localStorage.setItem("access_token", data.access_token)
            history(`/dashboard/`);
        } else {
            toast.error("Invalid Username or Password");
            setUsername("")
            setPassword("")
        }
    }
    return (
        <>
        <NavBar/>
            <div className='login'>
            <h1>Login</h1>

            <section className='form'>
                <form onSubmit={submitData}>
                    <div className='form-group'>
                        <span>UserName</span>
                        <br />
                        <input type="text" autoComplete='false'
                            placeholder="Enter Username"
                            onChange={(e) => { setUsername(e.target.value) }}
                            value={username}
                        /><br />
                    </div>
                    <br />
                    <div className='form-group'>
                        <span>Password</span>
                        <br />
                        <input type="password" autoComplete='false'
                            placeholder='Enter Password'
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                        />
                    </div>
                    <br />
                    <br />
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
        </>
    )
}
