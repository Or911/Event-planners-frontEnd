import React from "react";
import "./Ticket.css";
import { useNavigate} from 'react-router-dom';
import ButtonBack from "../../components/NavBar/ButtonBack/ButtonBack";

export default function Ticket({ ticket }) {

  const navigate = useNavigate();
  

  return (
    <div className="ticket">
      <img className="ticket-img" src={ticket.event.img} alt="Missing"></img>
      <div className="ticket-content">
        <div className="ticket-text">
        <ButtonBack/>
          <h1 onClick={()=>navigate(`/events/${ticket.event._id}`)}> {ticket.event.name} </h1>
          <div> {new Date(ticket.event.eventDate).toLocaleString('he-IL' , {dateStyle : "full"})} </div>
          <div> מיקום: {ticket.event.location} </div>
          <div> מחיר: {ticket.price}$ </div>
        </div>
      </div>
    </div>
  )
}
