import axios from 'axios'
import '../Styles/ViewBus.css'
import React, { useEffect, useState } from 'react'

const ViewBus = () => {
  let [bus, setBus] = useState([])
    useEffect(()=>{
      axios.get(`http://localhost:8080/api/buses`)
      .then((res)=>{
        console.log(res.data.data);
        setBus(res.data.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    },[])
  return (
    <div className='viewBus'>
      {bus.map((item)=>{
        return(
          <div className='bus_Details'>
            <h3>{item.name}</h3>
            <i>Seats : {item.noOfSeats} </i>
            <p>From: {item.from} </p>
            <p>To: {item.to} </p>
            <p>Date: {item.dateofdeparture} </p>
            <span>Bus Number : {item.busNumber} </span>
            <button>Book Seats</button>
          </div>
        )
      })}
    </div>
  )
}

export default ViewBus
