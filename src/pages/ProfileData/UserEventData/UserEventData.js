import React, { useEffect, useState } from 'react'
import './userEventData.css'
import { eventDateFormatIL } from '../../../utilities/eventDateFormat';
import GroupsIcon from '@mui/icons-material/Groups';
import Badge from '@mui/material/Badge';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsBT from '../../../components/SettingsBT/SettingsBT';
import FullEventData from '../FullEventData/FullEventData';



export default function UserEventData({eventData}) {
  const [invited , updateInvited] = useState(10)
  const [balance , updatebalance] = useState(10)

    useEffect(()=>{
      updatebalance(invited * eventData.price[0].standard)

    },[invited])

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
        <FullEventData eventData={eventData}/>
        </div>
        <SettingsBT/>
    </div>
  )
}
