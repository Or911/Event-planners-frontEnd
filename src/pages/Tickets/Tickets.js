import { getTickets } from "../../ServerAPI/TicketAPI";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";
import "./Tickets.css";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets().then((tickets) => {
      setTickets(tickets.data);
    });
    console.log("Tickets");
  }, []);

  return (
    <div className="tickets page">
      {tickets.map((ticket) =>(<Ticket key={ticket._id} ticket={ticket}/>))}
    </div>
  );
}
