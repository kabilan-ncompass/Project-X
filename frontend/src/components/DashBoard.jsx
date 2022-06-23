import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from "react-router"

function DashBoard() {

    const [data,setData] = useState([])
    let {username} = useParams(); 

  useEffect(()=>{
    const getData = async() =>{ 
        const data = (await axios.get(`http://localhost:3000/repo/${username}`)).data
        setData(data)
        console.log(data)
    }
    getData()
  },[])
    

  return (
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
                return <tr>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.repo_name}</td>
                </tr>
            })}
        </tbody>
    </table>
  )
}

export default DashBoard