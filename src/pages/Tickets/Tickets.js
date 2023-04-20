import { getTickets } from "../../ServerAPI/TicketAPI";
import { useEffect, useState } from "react";
import Ticket from "./Ticket";

export default function Tickets() {
  const [tickets, setTickets] = useState([1 ,2 ,3]);

  // event:{ type: schema.Types.ObjectId, ref: "events" },
  // user:{ type: schema.Types.ObjectId, ref: "Users" },
  // price: Number,

  useEffect(() => {
    // getTickets().then((tickets) => {
    //   setTickets(tickets.data);
    // });
    console.log("Tickets");
  }, []);

  return (
    <div className="tickets page">
      {tickets.map((ticket) =>(<Ticket key={ticket._id} ticket={Ticket}/>))}
    </div>
  );
}
