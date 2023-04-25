import React from "react";
import "./Ticket.css";
import { useNavigate} from 'react-router-dom';
import { eventDateFormatIL } from "../../utilities/eventDateFormat";

export default function Ticket({ ticket }) {

  const navigate = useNavigate();
  
  return (
    <div className="ticket">
      <img className="ticket-img" src={ticket.event.img} alt="Missing"></img>
      <div className="ticket-content">
        <div className="ticket-text">
          <h1 onClick={()=>navigate(`/events/${ticket.event._id}`)}> {ticket.event.name} </h1>
          <div> {eventDateFormatIL(ticket.event.eventDate)} </div>
          <div> מיקום: {ticket.event.location} </div>
          <div> מחיר: {ticket.price}$ </div>
          <img className="ticket-qr" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="Missing"></img>
        </div>
      </div>
    </div>
  )
}
