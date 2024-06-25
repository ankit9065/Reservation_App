import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import '../Styles/AdminDashboard.css'

const AdminDashboard = () => {

  let [dateofdeparture, setdateofdeparture] = useState("")
  let [from, setFrom] = useState("")
  let [to, setTo] = useState("")
  let [buses,setbuses] = useState([])
  let nav = useNavigate()

  function searchBus(e){
    e.preventDefault();

    axios.get(`http://localhost:8080/api/buses?from=${from}&to=${to}&dateofdeparture=${dateofdeparture}`)
    .then(res =>{
      console.log(res.data.data);
      setbuses(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  function bookbus(id){
    nav(`/adminHomePage/bookbus/${id}`)
  }

  return (
    <div className='adminDashBoard'>
      <form onSubmit={searchBus} action="">        
        <input type="text" required value={from} onChange={(e)=>{setFrom(e.target.value)}} placeholder='Enter the From Location' />
        <input type="text" required value={to} onChange={(e)=>{setTo(e.target.value)}} placeholder='Enter the To Location' />
        <input type="date" required value={dateofdeparture} onChange={(e)=>{setdateofdeparture(e.target.value)}} placeholder='Enter the Date of Departure ' />
        <button>Search</button>
      </form>
      
      {buses.map((item)=>{
        return (
          <div className="bus_list">
            <h4>{item.name}</h4>
            <i>Seats : {item.noOfSeats}</i>
            <p>From : {item.from}</p>
            <p>To : {item.to}</p>
            <p>Date : {item.dateofdeparture}</p>
            <span>Bus Number :{item.busNumber}</span>
            <button onClick={()=>{bookbus(item.id)}}>Book Bus</button>          
          </div>
        )
      })}
    </div>
  )
}

export default AdminDashboard
