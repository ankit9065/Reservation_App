import axios from 'axios';
import '../Styles/ViewBus.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewBus = () => {
  const [bus, setBuses] = useState([]);
  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchBusData();
  }, []);

  const fetchBusData = () => {
    axios.get(`http://localhost:8080/api/buses`)
      .then((res) => {
        console.log(res.data.data);
        setBuses(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeBus = (id, busNumber) => {
    axios.delete(`http://localhost:8080/api/buses/${id}`)
      .then((res) => {
        alert(`Bus number ${busNumber} has been removed from the list`);
        console.log(res);
        fetchBusData();
      })
      .catch((err) => {
        alert("Can't remove this item");
        console.log(err);
      });
  };

  const editNavigate = (id) => {
    nav(`/adminHomePage/editbus/${id}`);
  };

  return (
    <div className='viewBus'>
      {bus.map((item) => (
        <div className='bus_Details' key={item.id}>
          <h3>{item.name}</h3>
          <i>Seats: {item.noOfSeats}</i>
          <p>From: {item.from}</p>
          <p>To: {item.to}</p>
          <p>Date: {item.dateofdeparture}</p>
          <p>Bus Number: {item.busNumber}</p>
          <p>Available Seats: {item.availableSeats}</p>
          <button onClick={() => editNavigate(item.id)}>Edit</button>
          <button onClick={() => removeBus(item.id, item.busNumber)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ViewBus;
