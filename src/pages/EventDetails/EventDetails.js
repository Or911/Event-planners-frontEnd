import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventData } from "../../ServerAPI/EventAPI";
import "./EventDetails.css";
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import { createTicket } from "../../ServerAPI/TicketAPI";
import SelectTickets from "../../components/selectTickets/SelectTickets";


export default function EventDetails() {
  const [eventData, setEventData] = useState({});
  const [ priceTicket , setPriceTicket] = useState("")
  let { id } = useParams();

  useEffect(() => {
    getEventData(id).then((event) => {
      setEventData(event.data);
      console.log(event.data);
    });
    console.log("EventDetails");
  }, []);

  function updatePriceTicket(price){
    setPriceTicket(price)
  }

  const buyTicket = function () {
    createTicket(eventData._id, priceTicket);
  };

  return (
    <div className="page event-details">
      <div className="cardEventDetails">
        <ButtonBack />
        <div className="imgSection">
          <img src={eventData.img} alt={eventData.name} />
          <div>
            <h4>:תאריך</h4>
            <p> {eventData.eventDate}</p>
            <h4>:מיקום</h4>
            <p>{eventData.location}</p>
          </div>
        </div>

        <h2>{eventData.name}</h2>
        <hr />
        <h3>מארגן: {eventData.organizer}</h3>
        <h2>:פירוט </h2>
        <p className="description-Event">{eventData.description}</p>
        <hr />
        <div className="priceSection">
          <h4>:סוג כרטיס</h4>
          <SelectTickets tickets={eventData.price} updatePriceTicket={updatePriceTicket}/>
        </div>
        <Button
          onClick={buyTicket}
          variant="contained"
          endIcon={<ShoppingCartCheckoutIcon />}
        >
          buy a ticket
        </Button>
        <h4> {priceTicket} : מחיר כרטיס</h4>


      </div>
    </div>
  );
}
