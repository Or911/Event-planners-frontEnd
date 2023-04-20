import React from 'react'
import './Event.css'
import { useNavigate} from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Event({userEvent}) {
  const navigate = useNavigate();
  return (
        <div className='eventCard-container'onClick={()=>navigate(`/events/${userEvent._id}`)}>
            <img src={userEvent?.img} alt={userEvent?.name} className='imgEvent'/>
            <div> {userEvent?.name}  {userEvent?.organizer}</div>

            <div className='evenDetails' > 
            <KeyboardArrowUpIcon/>
            <p>{userEvent?.name} </p>
            <p>{userEvent?.location}<LocationOnIcon /></p></div>

        </div>
  )
}
