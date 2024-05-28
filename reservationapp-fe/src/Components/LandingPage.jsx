import React from 'react'
import '../Styles/LandingPage.css'
import { Link } from 'react-router-dom'
const LandingPage = () => {
    return (
        <div className='landingPage'>
            <Link to="/adminlogin">
                <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="" />
                <h2>Admin</h2>
            </Link>
            <Link to="/userlogin">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCf31SSHaH1Z8oPndTOFf1FctAz3_1GSQCe_7AA4wsDvpxNp2xh3pck7M5HGHj97zG8g&usqp=CAU" alt="" />
                <h2>User</h2>
            </Link>
        </div>
    )
}

export default LandingPage
