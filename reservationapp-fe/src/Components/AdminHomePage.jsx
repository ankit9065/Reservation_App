import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminDashboard from './AdminDashboard'

const AdminHomePage = () => {
  return (
    <div>
      <AdminNavbar/>
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
      </Routes>
    </div>
  )
}

export default AdminHomePage
