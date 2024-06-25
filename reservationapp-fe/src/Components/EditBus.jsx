import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Styles/EditBus.css'

const EditBus = () => {
  let [name, setName] = useState("")
  let [dateofdeparture, setdateofdeparture] = useState("")
  let [busNumber, setbusNumber] = useState("")
  let [from, setFrom] = useState("")
  let [to, setTo] = useState("")
  let [noOfSeats, setnoOfSeats] = useState("")
  let [costPerSeat, setCostPerSeat] = useState("")
  let [availableSeats, setAvailableSeats]  = useState("")

  let params = useParams()
  let navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/buses/${params.id}`)
    .then((res)=>{
      console.log(res.data.data);
      setName(res.data.data.name)
      setdateofdeparture(res.data.data.dateofdeparture)
      setbusNumber(res.data.data.busNumber)
      setFrom(res.data.data.from)
      setTo(res.data.data.to)
      setnoOfSeats(res.data.data.noOfSeats)
      setCostPerSeat(res.data.data.setCostPerSeat)
      setAvailableSeats(res.data.data.availableSeats)
    })
  },[params.id])

  let newbus={
    name, dateofdeparture, busNumber, from, to, noOfSeats, costPerSeat, availableSeats
}

function editBus(e){
  e.preventDefault()
  axios.put(`http://localhost:8080/api/buses/${params.id}`, newbus)
  .then((res)=>{
      console.log(res);
      alert('Bus Details have been updated Successfully')
      navigate(`/adminHomePage/viewbus`)
  })
  .catch((err)=>{
      console.log(err);
      alert('Invalid Data Formate')
  })
}
  return (
    <div className='updateBus'>
            <form onSubmit={editBus} action="">
                <label htmlFor="">Name</label>
                <input type="text" required placeholder='Enter the bus Name' value={name} onChange={(e) => { setName(e.target.value) }} />

                <label htmlFor="">Date of Departure</label>
                <input type="date" required placeholder='Enter the bus Dateofdeparture' value={dateofdeparture} onChange={(e) => { setdateofdeparture(e.target.value) }} />

                <label htmlFor="">Bus Number</label>
                <input type="text" required placeholder='Enter the bus BusNumber' value={busNumber} onChange={(e) => { setbusNumber(e.target.value) }} />

                <label htmlFor="">From</label>
                <input type="text" required placeholder='Enter the bus From' value={from} onChange={(e) => { setFrom(e.target.value) }} />

                <label htmlFor="">To</label>
                <input type="text" required placeholder='Enter the bus To' value={to} onChange={(e) => { setTo(e.target.value) }} />

                <label htmlFor="">No Of Seats</label>
                <input type="number" required placeholder='Enter the bus NoOfSeats' value={noOfSeats} onChange={(e) => { setnoOfSeats(e.target.value) }} />

                <label htmlFor="">Cost_Per_Seat</label>
                <input type="number" required placeholder='Enter price per seat' value={costPerSeat} onChange={(e) => { setCostPerSeat(e.target.value) }} />

                <label htmlFor="">Avialable_Seats</label>
                <input type="number" required placeholder='Enter price per seat' value={availableSeats} onChange={(e) => { setAvailableSeats(e.target.value) }} />
                
                <button>Update</button>
            </form>

        </div>
  )
}

export default EditBus
