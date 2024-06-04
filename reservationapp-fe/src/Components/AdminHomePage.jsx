import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminDashboard from './AdminDashboard'
import AddBus from './AddBus'
import ViewBus from './ViewBus'

const AdminHomePage = () => {
  return (
    <div>
      <AdminNavbar/>
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/addbus' element={<AddBus/>}/>
        <Route path='/viewbus' element={<ViewBus/>}/>
      </Routes>
    </div>
  )
}

export default AdminHomePage
