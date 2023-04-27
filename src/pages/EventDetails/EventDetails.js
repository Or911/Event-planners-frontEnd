import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventData } from "../../ServerAPI/EventAPI";
import "./EventDetails.css";
import { Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import { createTicket } from "../../ServerAPI/TicketAPI";
import SelectTickets from "../../components/selectTickets/SelectTickets";
import { eventDateFormatIL } from "../../utilities/eventDateFormat";


export default function EventDetails({updateNotificationData}) {
  const [eventData, setEventData] = useState({});
  const [ priceTicket , setPriceTicket] = useState("")
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getEventData(id).then((event) => {
      setEventData(event.data);
    });
    // console.log("EventDetails");
  }, []);

  function updatePriceTicket(price){
    setPriceTicket(price)
  }

  const buyTicket = function () {
    if(priceTicket === ""){
      updateNotificationData('אנא בחר סוג כרטיס', 'error')
    }
    else{
      createTicket(eventData._id, priceTicket).then(()=>{
        updateNotificationData(`קנית כרטיס (${priceTicket}$)  ל${eventData.name}`, 'success')
        navigate("/tickets")
      }).catch((error) => {
        updateNotificationData(` הכרטיסים אזלו או שכרטיס האשראי נכשל`, 'error')
      })
    }
  };
  
  return (
    <div className="page event-details">
      <div className="cardEventDetails">
      <ButtonBack/>
        <div className="imgSection">
          <img src={eventData.img} alt={eventData.name} />
          <div>
            <h4>:תאריך</h4>
            <p> {eventDateFormatIL(eventData.eventDate)}</p>
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
          <h4>קנה כרטיס</h4>
        </Button>
        <h4> {priceTicket} : מחיר כרטיס</h4>


      </div>
    </div>
  );
}
