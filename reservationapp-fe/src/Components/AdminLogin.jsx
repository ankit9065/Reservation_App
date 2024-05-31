import React, { useState } from 'react'
import '../Styles/AdminLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  let [email, setAdminName] = useState("")
  let [password, setPassword] = useState("")

  let navigate = useNavigate()

  function verify(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/api/admins/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
      alert("Login Successfully")
      console.log(res);
      navigate('/adminHomePage')
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
        <input type="text" value={email} onChange={(e)=>{setAdminName(e.target.value)}} placeholder='Enter Admin_Name' />

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
