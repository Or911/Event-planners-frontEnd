import React, { useEffect, useState } from 'react'
import Button from '@mui/joy/Button';
import { eventDateFormatIL } from '../../../utilities/eventDateFormat';
import OpenInNew from '@mui/icons-material/OpenInNew';
import './FullEventData.css'


export default function FullEventData({eventData}) {
  const [showFullEvent, setshowFullEvent] = useState(false);
  console.log(eventData);

  function switchshowFullEvent(){
    if(showFullEvent){
      setshowFullEvent(false)
    }
    else{setshowFullEvent(true)}
  }
  
  // useEffect(() => {
  //   getUserEventByID().then((event) => setUserEvent(event.data));
  //   console.log("FullEventData");
  // }, []);

  if(showFullEvent){
    return (
      <div className='eventManagement'>

            <div className='exitBT' onClick={switchshowFullEvent}>x</div>
        <div className="imgSection">
          <img src={eventData.img} alt={eventData.name} />
          <div>
            <h4>:תאריך</h4>
            <p> {eventDateFormatIL(eventData.eventDate)}</p>
            <h4>:מיקום</h4>
            <p>{eventData.location}</p>
          </div>
        </div>

        <h2>{eventData.name}</h2>
        <hr />
        <h3>מארגן: {eventData.organizer}</h3>
        <h2>:פירוט </h2>
        
        <hr />
        <div className="priceSection">
          <h4>:סוג כרטיס</h4>

        </div>
      </div>
    )
  }
  else{
    return(
      <Button className='showFullEventBT' color="warning" onClick={switchshowFullEvent} startDecorator={<OpenInNew />}>
      לפרטי האירוע
      </Button>
  )}


}
