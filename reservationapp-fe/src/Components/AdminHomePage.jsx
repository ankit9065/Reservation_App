import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminDashboard from './AdminDashboard'
import AddBus from './AddBus'

const AdminHomePage = () => {
  return (
    <div>
      <AdminNavbar/>
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/addbus' element={<AddBus/>}/>
      </Routes>
    </div>
  )
}

export default AdminHomePage
