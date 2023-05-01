import React from "react";
import "./Ticket.css";
import { useNavigate} from 'react-router-dom';
import { eventDateFormatIL } from "../../utilities/eventDateFormat";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Ticket({ ticket }) {

  const backgroundColor = ticket.isScanned ? '#90EE90' : 'white'
  let locationLink = `http://maps.google.com/maps?daddr=${ticket.event?.location}&dir_action=navigate`

  const navigate = useNavigate();
  
  return (
    <div className="ticket" style={{backgroundColor : backgroundColor}}>
      <img className="ticket-img" src={ticket.event?.img} alt="Missing" ></img>
      <div className="ticket-content">
        <div className="ticket-text">
        {ticket.event ?
        <div>
          <h1 onClick={()=>navigate(`/events/${ticket.event?._id}`)}> {ticket.event?.name} </h1>
          <div> {eventDateFormatIL(ticket.event?.eventDate)} </div>
          {/* <div>  {ticket.event?.location} </div> */}
          <a href={locationLink} target="_blank" rel="noreferrer noopener">{ticket.event?.location}<LocationOnIcon /></a>
        </div>
          :
          <div>
            <div>מנהל האירוע ביטל את האירוע</div>
            <div>אנא צרו קשר עם <button> תמיכה </button></div>
          </div>
        }
          {/* <h1> {ticket.event?.name} </h1>
          <div> {eventDateFormatIL(ticket.event?.eventDate)} </div>
          <div> מיקום: {ticket.event?.location} </div> */}
          <p> {ticket.price}₪ </p>
          <img className="ticket-qr" src={ticket.qrCode} alt="Missing"></img>
        </div>
      </div>
    </div>
  )
}