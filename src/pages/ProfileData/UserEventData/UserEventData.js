import React, { useEffect, useState } from 'react'
import './userEventData.css'
import { eventDateFormatIL } from '../../../utilities/eventDateFormat';
import GroupsIcon from '@mui/icons-material/Groups';
import Badge from '@mui/material/Badge';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsBT from '../../../components/SettingsBT/SettingsBT';
import FullEventData from '../FullEventData/FullEventData';
import { getTicketsOfEvent } from '../../../ServerAPI/UserDataAPI';
import { deleteEvent } from '../../../ServerAPI/EventAPI';




export default function UserEventData({eventData}) {
  const [invited , updateInvited] = useState(0)
  const [balance , updatebalance] = useState(0)

    useEffect(()=>{
      getTicketsOfEvent(eventData._id)
        .then(tickets =>{
         let numOfTickets = tickets.data.length
         let priceOfTickets = eventData.price[0].standard
          updateInvited(numOfTickets)
          updatebalance(numOfTickets * priceOfTickets)
        })
        console.log("UserEventData");
    },[])

  return (
    <div className='cardEventsUser'>
        <img src={eventData.img} alt={eventData.name}/>
        <div>
        
        
        <h4>שם: {eventData.name}</h4>
        <h4>תאריך: {eventDateFormatIL(eventData.eventDate)}</h4>
        <div className='buttomBar'>
        <Badge badgeContent={invited} color="primary">
            <GroupsIcon fontSize='large'/>
          </Badge>
        <Badge badgeContent={`$${balance}`} color="success">
          <MonetizationOnIcon fontSize='large'/>
        </Badge>
        </div>
        <FullEventData eventData={eventData} />
        </div>
        <SettingsBT/>
        <button onClick={() => deleteEvent(eventData._id)}> Delete </button>
    </div>
  )
}
