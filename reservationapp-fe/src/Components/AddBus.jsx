import React, { useState } from 'react'
import '../Styles/AddBus.css'
import axios from 'axios'

function AddBus() {

    let [name, setName] = useState("")
    let [dateofdeparture, setdateofdeparture] = useState("")
    let [busNumber, setbusNumber] = useState("")
    let [from, setFrom] = useState("")
    let [to, setTo] = useState("")
    let [noOfSeats, setnoOfSeats] = useState("")

let BusData={
    name, dateofdeparture, busNumber, from, to, noOfSeats
}

function addBusData(e){
    e.preventDefault()
    axios.post('http://localhost:8080/api//api/buses', BusData)
    .then((res)=>{
        console.log(res);
        alert('Bus Details have been added Successfully')
    })
    .catch((err)=>{
        console.log(err);
        alert('Invalid Data Formate')
    })
}

    return (
        <div className='AddBus'>
            <form onSubmit={addBusData} action="">
                <label htmlFor="">Name</label>
                <input type="text" required placeholder='Enter the bus Name' value={name} onChange={(e) => { setName(e.target.value) }} />

                <label htmlFor="">Date of Departure</label>
                <input type="date" required placeholder='Enter the bus dateofdeparture' value={dateofdeparture} onChange={(e) => { setdateofdeparture(e.target.value) }} />

                <label htmlFor="">Bus Number</label>
                <input type="text" required placeholder='Enter the bus busNumber' value={busNumber} onChange={(e) => { setbusNumber(e.target.value) }} />

                <label htmlFor="">From</label>
                <input type="text" required placeholder='Enter the bus from' value={from} onChange={(e) => { setFrom(e.target.value) }} />

                <label htmlFor="">To</label>
                <input type="text" required placeholder='Enter the bus To' value={to} onChange={(e) => { setTo(e.target.value) }} />

                <label htmlFor="">No Of Seats</label>
                <input type="number" required placeholder='Enter the bus noOfSeats' value={noOfSeats} onChange={(e) => { setnoOfSeats(e.target.value) }} />

                <button className='btn btn-info'>Add Bus</button>
            </form>

        </div>
    )
}

export default AddBus
