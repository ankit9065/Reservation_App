// import React from 'react'
// import { useState,useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BookBus = () => {
//     let params = useParams()
//     let [bus,setbus] = useState("")

//     useEffect(() => {
//         axios.get(`http://localhost:8080/api/buses/${params.id}`)
//           .then((res) => {
//             console.log(res);
//             setbus(res.data.data)
//           })
//           .catch((err) => {
//             console.log(err);
//           })
//       }, [])
    
//       let seats = [1,2,3,4,5,6,7,8,9,10]
//   return (
//     <div className='diplay_book'>
//      <h1>{bus.name}</h1>
//         <b>From:</b><span>{bus.from}</span> <br /><br />
//         <b>To:</b><span>{bus.to}</span><br /><br />
//         <b>Coach Type : </b>
//         <select >
//             <option>AC</option>
//             <option>Non/Ac</option>
//             <option>Sleeper Ac</option>
//             <option>Sleeper Non/Ac</option>

//         </select>
//         <br /><br />
//         <b>Number Of Seats Available : </b><big><b>{bus.noOfSeats}</b></big>
//         <br /><br />
//         <b>Select Number Of Seats :</b><select > 
//             {seats.map((seat)=>{
//                 return(
//                     <option >{seat}</option>
//                 )
//             })}
//         </select>

//             <h3>Date Of Departure : <i>{bus.dateofdeparture}</i></h3>
//             <button className='btn btn-danger my-2 mx-5'>Book Bus</button>
//         </div>
//   )
// }

// export default BookBus


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookBus = () => {
    const { id } = useParams();
    const [bus, setBus] = useState({});
    const [selectedSeats, setSelectedSeats] = useState(1);
    const [coachType, setCoachType] = useState("AC");

    useEffect(() => {
        axios.get(`http://localhost:8080/api/buses/${id}`)
            .then((res) => {
                console.log(res);
                setBus(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const seats = Array.from({ length: 10 }, (_, i) => i + 1);

    const handleBookBus = () => {
        // Add your booking logic here
        console.log(`Booking ${selectedSeats} seats in ${coachType} coach for bus ${bus.name}`);
    };

    return (
        <div className='display_book'>
            <h1>{bus.name}</h1>
            <b>From:</b><span>{bus.from}</span> <br /><br />
            <b>To:</b><span>{bus.to}</span><br /><br />
            <b>Coach Type: </b>
            <select value={coachType} onChange={(e) => setCoachType(e.target.value)}>
                <option value="AC">AC</option>
                <option value="Non-AC">Non/AC</option>
                <option value="Sleeper-AC">Sleeper AC</option>
                <option value="Sleeper-Non-AC">Sleeper Non/AC</option>
            </select>
            <br /><br />
            <b>Number Of Seats Available: </b><big><b>{bus.noOfSeats}</b></big>
            <br /><br />
            <b>Select Number Of Seats: </b>
            <select value={selectedSeats} onChange={(e) => setSelectedSeats(e.target.value)}>
                {seats.map((seat) => (
                    <option key={seat} value={seat}>{seat}</option>
                ))}
            </select>
            <h3>Date Of Departure: <i>{bus.dateofdeparture}</i></h3>
            <button className='btn btn-danger my-2 mx-5' onClick={handleBookBus}>Book Bus</button>
        </div>
    );
};

export default BookBus;
