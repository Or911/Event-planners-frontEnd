import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getEventData } from '../../ServerAPI/EventAPI';
import './EventDetails.css'
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function EventDetails() {
  const [eventData , setEventData] = useState({})
  let { id } = useParams();

  useEffect(() => {
    getEventData(id).then((event) => {
      console.log(event.data);
      setEventData(event.data);
    });
    console.log("EventDetails");
  },[]);

  return (
    <div className='page event-details'>
        <div className='cardEvent'>
          <div className='imgSection'>
            <img src={eventData.img} alt={eventData.name}/>
            <div>
              <h4>Date:</h4>
              <p> צריך להוסיף </p>
              <h4>Location:</h4>
              <p>{eventData.location}</p>
            </div>
          </div>
          
          <h2>{eventData.name}</h2>
          <hr/>
          <h3>organizer: {eventData.organizer}</h3>
          <h2>Description:</h2>
          <p className='description-Event'>{eventData.description}</p>
          <hr/>
          <Button variant="contained" endIcon={<ShoppingCartCheckoutIcon  />}>
            buy a ticket
          </Button>
          <div className='priceSection'>
            <h4>price:</h4>
            <p>50 $</p>
          </div>

          
        </div>
    </div>
  )
}
