import React from 'react'
import '../Styles/AdminLogin.css'
import Button from 'react-bootstrap/Button';

const AdminLogin = () => {
  return (
    <div className='adminLogin'>
      <form action="">
        <label htmlFor="">
            UserName
        </label>
        <input type="text" placeholder='Enter Username' />

        <label htmlFor="">
            Password
        </label>
        <input type="text" placeholder='Enter password' />

        {/* <button className='btn-btn-primary'>Login</button> */}
        <Button variant="outline-info">Login</Button>
      </form>
    </div>
  )
}

export default AdminLogin
