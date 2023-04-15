import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">
            <h1>Home</h1>
            </Link>
        
        <Link to="/Profile">
        <h1>Profile</h1>
        </Link>
        
        <Link to="/Contact">
        <h1>Contact</h1>
        </Link>
        <Link to="/Chariot">
        < img src="https://cdn-icons-png.flaticon.com/512/117/117346.png?w=740&t=st=1681343561~exp=1681344161~hmac=ca48d9e60bee0724e45b6715b531a7381d1be19fe878912d80707e07024e14d5" alt="" />
        </Link>
       
        
       
    </div>
  )
}
