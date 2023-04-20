import React from 'react'
import './Event.css'
import { useNavigate} from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Event({userEvent}) {
  let link = `http://maps.google.com/maps?daddr=${userEvent?.location}&dir_action=navigate`
  const navigate = useNavigate();
  return (
        <div className='eventCard-container' >
            <img src={userEvent?.img} alt={userEvent?.name} className='imgEvent' onClick={()=>navigate(`/events/${userEvent._id}`)}/>
            <div> {userEvent?.name}  {userEvent?.organizer}</div>

            <div className='evenDetails' > 
            <KeyboardArrowUpIcon/>
            <p onClick={()=>navigate(`/events/${userEvent._id}`)}>{userEvent?.name} </p>
            <a href={link}>{userEvent?.location}<LocationOnIcon /></a></div>

        </div>
  )
}
