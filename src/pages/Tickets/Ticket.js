import React from "react";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (

    // <div class="ticket">
    //   <div class="ticket-content">
    //     <p class="ticket-text">
    //       <h1 onClick={()=>navigate(`/events/${ticket.event._id}`)}> Event name </h1>
    //       <div> Date : {ticket.event.date} </div>
    //       <div> Location: {ticket.event.location} </div>
    //       <div> Price: {ticket.price}$ </div>
    //     </p>
    //   </div>
    // </div>
    
    <div class="ticket">
      <div class="ticket-content">
        <p class="ticket-text">
          <h1> Event name </h1>
          <div> Date : 20.05 </div>
          <div> Location: Dimona, nava david </div>
          <div> Price: 30$ </div>
        </p>
      </div>
    </div> 
    
  )
}
