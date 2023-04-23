import React from 'react'
import './userEventData.css'



export default function UserEventData({eventData}) {
    console.log(eventData)
  return (
    <div className='cardEventDetails'>
        <img src={eventData.img} alt={eventData.name}/>
        <h4>{eventData.name}</h4>
    </div>
  )
}
