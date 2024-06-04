import React, { useState } from 'react'
import '../Styles/AdminLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  let [email, setAdminName] = useState("")
  let [password, setPassword] = useState("")
  const nav = useNavigate();

  function verify(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/api/admins/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
      nav('/adminHomePage')
      alert("Login Successfully")
      console.log(res.data.data);
      localStorage.setItem("Admin",JSON.stringify(res.data.data))
    })

    .catch((err)=>{
      alert("Login Failed")
      console.log(err);

    })
  }
  return (
    <div className='adminLogin'>
      <form onSubmit={verify} action="">
        <label htmlFor="">
            Admin_Name
        </label>
        <input type="text" value={email} required onChange={(e)=>{setAdminName(e.target.value)}} placeholder='Enter Admin_Name' />

        <label htmlFor="">
            Password
        </label>
        <input type="text" value={password} required onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />

        <button>Login</button>
        <p>New User? <Link to="/adminSignUp">SignUp</Link> here...</p>
        <p><Link to="/">Back</Link></p>
      </form>
      
    </div>
  )
}

export default AdminLogin
