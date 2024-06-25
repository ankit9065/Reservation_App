// import React, { useState } from 'react'
// import '../Styles/AddBus.css'
// import axios from 'axios'
// import { type } from '@testing-library/user-event/dist/type'
// import {useNavigate } from 'react-router-dom'

// function AddBus() {
//     let navigate = useNavigate();

//     let [name, setName] = useState("")
//     let [dateofdeparture, setdateofdeparture] = useState("")
//     let [busNumber, setbusNumber] = useState("")
//     let [from, setFrom] = useState("")
//     let [to, setTo] = useState("")
//     let [noOfSeats, setnoOfSeats] = useState("")
//     let [costPerSeat, setCostPerSeat] = useState("")
//     let [availableSeats, setAvailableSeats]  = useState("")

// let BusData={
//     name, dateofdeparture, busNumber, from, to, noOfSeats, costPerSeat, availableSeats
// }

// let admin = JSON.parse(localStorage.getItem("Admin"))
// console.log(admin);
// console.log(typeof(admin));

// function addBusData(e){
//     e.preventDefault()
//     axios.post(`http://localhost:8080/api/buses/${admin.id}`, BusData)
//     .then((res)=>{
//         console.log(res);
//         alert('Bus Details have been added Successfully')
//         navigate(`/adminHomePage/viewbus`)
//     })
//     .catch((err)=>{
//         console.log(err);
//         alert('Invalid Data Formate')
//     })
// }

//     return (
//         <div className='AddBus'>
//             <form onSubmit={addBusData} action="">
//                 <label htmlFor="">Name</label>
//                 <input type="text" required placeholder='Enter the bus Name' value={name} onChange={(e) => { setName(e.target.value) }} />

//                 <label htmlFor="">Date of Departure</label>
//                 <input type="date" required placeholder='Enter the bus Dateofdeparture' value={dateofdeparture} onChange={(e) => { setdateofdeparture(e.target.value) }} />

//                 <label htmlFor="">Bus Number</label>
//                 <input type="text" required placeholder='Enter the bus BusNumber' value={busNumber} onChange={(e) => { setbusNumber(e.target.value) }} />

//                 <label htmlFor="">From</label>
//                 <input type="text" required placeholder='Enter the bus From' value={from} onChange={(e) => { setFrom(e.target.value) }} />

//                 <label htmlFor="">To</label>
//                 <input type="text" required placeholder='Enter the bus To' value={to} onChange={(e) => { setTo(e.target.value) }} />

//                 <label htmlFor="">No Of Seats</label>
//                 <input type="number" required placeholder='Enter the bus NoOfSeats' value={noOfSeats} onChange={(e) => { setnoOfSeats(e.target.value) }} />

//                 <label htmlFor="">Cost_Per_Seat</label>
//                 <input type="" required placeholder='Enter price per seat' value={costPerSeat} onChange={(e) => { setCostPerSeat(e.target.value) }} />

//                 <label htmlFor="">Available_Seats</label>
//                 <input type="number" required placeholder='Enter price per seat' value={availableSeats} onChange={(e) => { setAvailableSeats(e.target.value) }} />

//                 <button>Add Bus</button>
//             </form>

//         </div>
//     )
// }

// export default AddBus


import React, { useState } from 'react';
import '../Styles/AddBus.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBus() {
    let navigate = useNavigate();

    let [name, setName] = useState("");
    let [dateofdeparture, setDateOfDeparture] = useState("");
    let [busNumber, setBusNumber] = useState("");
    let [from, setFrom] = useState("");
    let [to, setTo] = useState("");
    let [noOfSeats, setNoOfSeats] = useState("");
    let [costPerSeat, setCostPerSeat] = useState("");
    let [availableSeats, setAvailableSeats]  = useState("");

    let BusData = {
        name, dateofdeparture, busNumber, from, to, noOfSeats, costPerSeat, availableSeats
    };

    let admin = JSON.parse(localStorage.getItem("Admin"));
    console.log(admin);
    console.log(typeof(admin));

    function addBusData(e) {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/buses/${admin.id}`, BusData)
            .then((res) => {
                console.log(res);
                alert('Bus Details have been added Successfully');
                navigate(`/adminHomePage/viewbus`);
            })
            .catch((err) => {
                console.log(err);
                alert('Invalid Data Format');
            });
    }

    return (
        <div className='AddBus'>
            <form onSubmit={addBusData} action="">
                {/* <label htmlFor="">Name</label> */}
                <input type="text" required placeholder='Enter the bus Name' value={name} onChange={(e) => setName(e.target.value)} />

                {/* <label htmlFor="">Date of Departure</label> */}
                <input type="date" required placeholder='Enter the bus Date of Departure' value={dateofdeparture} onChange={(e) => setDateOfDeparture(e.target.value)} />

                {/* <label htmlFor="">Bus Number</label> */}
                <input type="text" required placeholder='Enter the bus Number' value={busNumber} onChange={(e) => setBusNumber(e.target.value)} />

                {/* <label htmlFor="">From</label> */}
                <input type="text" required placeholder='Enter the bus From' value={from} onChange={(e) => setFrom(e.target.value)} />

                {/* <label htmlFor="">To</label> */}
                <input type="text" required placeholder='Enter the bus To' value={to} onChange={(e) => setTo(e.target.value)} />

                {/* <label htmlFor="">No Of Seats</label> */}
                <input type="number" required placeholder='Enter the Number of Seats' value={noOfSeats} onChange={(e) => setNoOfSeats(e.target.value)} />

                {/* <label htmlFor="">Cost Per Seat</label> */}
                <input type="number" required placeholder='Enter price per seat' value={costPerSeat} onChange={(e) => setCostPerSeat(e.target.value)} />

                {/* <label htmlFor="">Available Seats</label> */}
                <input type="number" required placeholder='Enter available seats' value={availableSeats} onChange={(e) => setAvailableSeats(e.target.value)} />

                <button>Add Bus</button>
            </form>
        </div>
    );
}

export default AddBus;