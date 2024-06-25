import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminDashboard from './AdminDashboard'
import AddBus from './AddBus'
import ViewBus from './ViewBus'
import EditBus from './EditBus'
import BookBus from './BookBus'

const AdminHomePage = () => {
  return (
    <div>
      <AdminNavbar/>
      <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/addbus' element={<AddBus/>}/>
        <Route path='/viewbus' element={<ViewBus/>}/>
        <Route path='/editbus/:id' element={<EditBus/>}/>
        <Route path='/bookbus/:id' element={<BookBus/>}/>
      </Routes>
    </div>
  )
}

export default AdminHomePage
