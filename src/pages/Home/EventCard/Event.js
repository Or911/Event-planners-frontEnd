import React from 'react'
import './Event.css'

export default function Event({event}) {
  return (
    <div className='event'>
        <div className='eventCard-container'>

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
