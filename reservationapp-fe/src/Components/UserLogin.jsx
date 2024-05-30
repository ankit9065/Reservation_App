import React, { useState } from 'react'
import '../Styles/UserLogin.css'
import { Link } from 'react-router-dom'

const UserLogin = () => {

  let [userName, setUserName] = useState("")
  let [password, setPassword] = useState("")

  function verify(){
    if(userName == "suraj" && password == 1234){
      alert("Login Successfull")
    }
    else{
      alert("Login failed")
    }
  }
  return (
    <div className='userLogin'>
      <form onSubmit={verify} action="">
        <label htmlFor="">
            User_Name
        </label>
        <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder='Enter User_Name' />

        <label htmlFor="">
            Password
        </label>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />

        <button>Login</button>
        <p>New User? <Link to="/userSignUp">SignUp</Link> here...</p>
        <p><Link to="/">Back</Link></p>
      </form>
      
    </div>
  )
}

export default UserLogin
