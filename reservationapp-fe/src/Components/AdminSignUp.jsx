import React, { useState } from 'react'
import '../Styles/AdminSignUp.css'
import { Link } from 'react-router-dom'

import axios from 'axios'

const AdminSignUp = () => {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [gst_no, setGst_no] = useState("")
    let [travles_name, setTravels_name] = useState("")
    let [password, setPassword] = useState("")

   let data  = {
    name , email , phone , gst_no , travles_name , password
   }


   function createAdmin (e) {
    e.preventDefault()

    axios.post("http://localhost:8080/api/admins" , data)
    .then((e)=>{ 
      alert("success")
      console.log(e);})

      .catch((e)=>{alert("err")})
   }

   

  return (
    <div className='adminSignUp'>
        <form onSubmit={createAdmin}  action="">

            <label htmlFor="">Name</label> <input type="text" required placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="">Phone</label> <input type="tel" required placeholder='Enter Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <label htmlFor="">Gst_no</label> <input type="text" required placeholder='Enter Gst_no' value={gst_no} onChange={(e)=>setGst_no(e.target.value)}/>
            <label htmlFor="">Travels_Name</label> <input type="text" required placeholder='Enter Travels_name' value={travles_name} onChange={(e)=>setTravels_name(e.target.value)}/>
            <label htmlFor="">Email</label> <input type="email" required placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Password</label> <input type="password" required placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button className='btn-btn-danger'>Login</button>
        <p><Link to="/adminLogin">Back</Link></p>
      </form>
      
    </div>
  )
}

export default AdminSignUp
