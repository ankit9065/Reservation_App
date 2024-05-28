import React from 'react'
import '../Styles/UserLogin.css'
import Button from 'react-bootstrap/Button';

const UserLogin = () => {
  return (
    <div className='userLogin'>
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
        <Button variant="outline-light">Login</Button>
      </form>
    </div>
  )
}

export default UserLogin
