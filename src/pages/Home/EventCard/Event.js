import React from 'react'
import './Event.css'
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Heart from "react-animated-heart";
import { useState , useEffect} from 'react'
import axios from 'axios' 
import { eventDateFormatIL } from '../../../utilities/eventDateFormat';

export default function Event({ userEvent }) {
  // let link = `https://waze.com/ul?q=${userEvent?.location}&navigate=yes`
  let link = `http://maps.google.com/maps?daddr=${userEvent?.location}&dir_action=navigate`
  const navigate = useNavigate();
  const [isClick, setClick] = useState(false);

  function addLike () {
    setClick(!isClick)
    console.log("add like "+isClick)
    let userName=localStorage.getItem("userName")
    axios({
      method: 'put',
      url: 'http://localhost:4000/like',
      data: {
        userName: userName,
        eventId:userEvent._id,
        isClick:isClick
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
  }
  
  useEffect(() => {
    doesLikeTheEvent()
  }, []);

  function doesLikeTheEvent(){
    if(userEvent.likes.includes(localStorage.getItem("userName"))){
      setClick(!isClick)
    }
  }

  return (
    <div className='eventCard-container' >
      <img src={userEvent?.img} alt={userEvent?.name} className='imgEvent' onClick={() => navigate(`/events/${userEvent._id}`)} />
      <div> {userEvent?.name}  {userEvent?.organizer}</div>

      <div className="btn">
        <Heart isClick={isClick} onClick={() =>addLike()} />
      </div>
      <div className='evenDetails' >
        <KeyboardArrowUpIcon />
        <p>{userEvent?.name} </p>
        <p>{eventDateFormatIL(userEvent?.eventDate)} </p>
        <a href={link}>{userEvent?.location}<LocationOnIcon /></a>
      </div>

    </div>
  )
}
