import React, { useState } from 'react'
import '../Styles/UserSignUp.css'
import { Link } from 'react-router-dom'

const UserSignUp = () => {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [password, setPassword] = useState("")
    let [age, setAge] = useState("")
    let [gender, setGender] = useState("")
     
  return (
    <div className='userSignUp'>
      <form action="">
        
            <label htmlFor="">Name</label> <input type="text" required placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="">Phone</label> <input type="phone" required placeholder='Enter Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <label htmlFor="">Age</label> <input type="age" required placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <label htmlFor="">Gender</label> <input type="text" required placeholder='Enter Gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
            <label htmlFor="">Email</label> <input type="email" required placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Password</label> <input type="text" required placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button className='btn-btn-danger'>Login</button>
        <p><Link to="/userLogin">Back</Link></p>
      </form>
    </div>
  )
}

export default UserSignUp
