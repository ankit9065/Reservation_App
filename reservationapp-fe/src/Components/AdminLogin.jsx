import React, { useState } from 'react'
import '../Styles/AdminLogin.css'

import { Link } from 'react-router-dom';

const AdminLogin = () => {
  let [adminName, setAdminName] = useState("")
  let [password, setPassword] = useState("")

  function verify(){
    if(adminName == "ankit" && password == 1234){
      alert("Login Successfull")
    }
    else{
      alert("Login failed")
    }
  }
  return (
    <div className='adminLogin'>
      <form onSubmit={verify} action="">
        <label htmlFor="">
            Admin_Name
        </label>
        <input type="text" value={adminName} onChange={(e)=>{setAdminName(e.target.value)}} placeholder='Enter Admin_Name' />

        <label htmlFor="">
            Password
        </label>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />

        <button>Login</button>
        <p>New User? <Link to="/adminSignUp">SignUp</Link> here...</p>
        <p><Link to="/">Back</Link></p>
      </form>
      
    </div>
  )
}

export default AdminLogin
