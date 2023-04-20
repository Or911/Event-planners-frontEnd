import React from "react";
import "./Ticket.css";
import { useNavigate} from 'react-router-dom';

export default function Ticket({ ticket }) {

  const navigate = useNavigate();

  return (
    <div className="ticket">
      <img className="ticket-img" src={ticket.event.img} alt="Missing"></img>
      <div className="ticket-content">
        <div className="ticket-text">
          <h1 onClick={()=>navigate(`/events/${ticket.event._id}`)}> {ticket.event.name} </h1>
          <div> Date : {ticket.event.eventDate} </div>
          <div> Location: {ticket.event.location} </div>
          <div> Price: {ticket.price}$ </div>
        </div>
      </div>
    </div>
  )
}
