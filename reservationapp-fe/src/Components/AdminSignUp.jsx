import React, { useState } from 'react'
import '../Styles/AdminSignUp.css'
import { Link } from 'react-router-dom'

const AdminSignUp = () => {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [gst_no, setGst_no] = useState("")
    let [travels_name, setTravels_name] = useState("")
    let [password, setPassword] = useState("")

  return (
    <div className='adminSignUp'>
        <form action="">
            <label htmlFor="">Name</label> <input type="text" required placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="">Phone</label> <input type="phone" required placeholder='Enter Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <label htmlFor="">Gst_no</label> <input type="text" required placeholder='Enter Gst_no' value={gst_no} onChange={(e)=>setGst_no(e.target.value)}/>
            <label htmlFor="">Travels_Name</label> <input type="text" required placeholder='Enter Travels_name' value={travels_name} onChange={(e)=>setTravels_name(e.target.value)}/>
            <label htmlFor="">Email</label> <input type="email" required placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Password</label> <input type="text" required placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button className='btn-btn-danger'>Login</button>
        <p><Link to="/adminLogin">Back</Link></p>
      </form>
      
    </div>
  )
}

export default AdminSignUp
