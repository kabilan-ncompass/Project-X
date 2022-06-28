import axios from "axios"
import { useEffect, useState } from 'react'
import { Navigate } from "react-router"
import NavBar from "./NavBar";
import "./styles/navbar.css"

function DashBoard() {
    const [hover,setHover] = useState(false) 
    const [data,setData] = useState([])
    const [username,setUsername] = useState("")
    let access_token = localStorage.getItem("access_token")

  useEffect(()=>{
    const getData = async() =>{ 
        let access_token = localStorage.getItem("access_token")
        const data = (await axios.get(`http://localhost:3000/repo/getRepo`,{headers:{"Authorization": `Bearer ${access_token}`}})).data
        const user = (await axios.get(`http://localhost:3000/user/profile`,{headers:{"Authorization": `Bearer ${access_token}`}})).data
        setUsername(user.username)
        setData(data.data)
        console.log(data.data)
    }
    getData()
  },[])
    
  if(access_token){
  return (
    <>
        <NavBar setHover={setHover}/>
        {hover?<><span className="hover">{username}</span></>:<></>}
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>name</th>
            <th>Repo</th>
            </tr>
        </thead>
        <tbody>
            {data.map(e =>{
                return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.repo_name}</td>
                </tr>
            })}
        </tbody>
        </table>
    </>
  )}
  return(
    <Navigate to="/" />
  )
}

export default DashBoard