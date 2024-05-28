import React from 'react'
import '../Styles/AdminLogin.css'

const AdminLogin = () => {
  return (
    <div className='adminLogin'>
      <form action="">
        <label htmlFor="">
            UserName
        </label>
        <input type="text" placeholder='Enter Username' required />

        <label htmlFor="">
            Password
        </label>
        <input type="text" placeholder='Enter password' required />

        <button className='btn-btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
