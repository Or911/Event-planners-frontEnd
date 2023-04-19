import React from 'react'
import './Event.css'
import { useNavigate} from 'react-router-dom';

export default function Event({userEvent}) {
  const navigate = useNavigate();
  return (
    <div className='event'>
        <div className='eventCard-container'onClick={()=>navigate(`/events/${userEvent._id}`)}>

          <span>
            <img src={userEvent?.img} alt=''/>
            <div> {userEvent?.name} by {userEvent?.organizer}</div>
          </span>

          <span>
            <div> {userEvent?.date}  {userEvent?.location}</div>
          </span>
        </div>

    </div>
  )
}
