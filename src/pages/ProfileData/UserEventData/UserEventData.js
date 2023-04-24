import React from 'react'
import './userEventData.css'
import SettingsIcon from '@mui/icons-material/Settings';



export default function UserEventData({eventData}) {
    console.log(eventData)
  return (
    <div className='cardEventsUser'>
        <img src={eventData.img} alt={eventData.name}/>
        <div>
        <SettingsIcon className='buttonSettings'/>
        <h4>שם: {eventData.name}</h4>
        <h4>תאריך: {eventData.eventDate}</h4>
        </div>
    </div>
  )
}
