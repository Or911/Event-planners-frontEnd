import React from 'react'
import './Event.css'

export default function Event({event: userEvent}) {
  return (
    <div className='event'>
        <div className='eventCard-container'>

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
