import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";


function NavBar({setHover}) {
    let history = useNavigate()
    let access_token = localStorage.getItem('access_token')

   const logout = () =>{
        localStorage.clear()
        history('/')
   }
  return (
    <div className='nav' id='navigation'>
        {access_token ? <><>
            <div></div>
        <div className='subnav'>
            <IconContext.Provider value={{ className: "shared-class", size: 30 , color:"white"}}>
                <CgProfile onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}/>
            </IconContext.Provider>
            <button onClick={logout} className="btn1">LOGOUT</button>
            
        </div>
        </> 
        </>
        : <></>}
    </div>
  )
}

export default NavBar