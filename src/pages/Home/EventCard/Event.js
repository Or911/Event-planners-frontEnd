import React from 'react'
import './Event.css'
import { useNavigate} from 'react-router-dom';

export default function Event({event}) {
  const navigate = useNavigate();
  return (
    <div className='event'>
        <div className='eventCard-container'onClick={()=>navigate(`/events/${event._id}`)}>

          <span>
            <img src={event?.img} alt=''/>
            <div> {event?.name} by {event?.organizer}</div>
          </span>

          <span>
            <div> {event?.date}  {event?.location}</div>
          </span>
        </div>

    </div>
  )
}
