import React, { useEffect, useState } from 'react'
import Button from '@mui/joy/Button';
import { eventDateFormatIL } from '../../../utilities/eventDateFormat';
import OpenInNew from '@mui/icons-material/OpenInNew';
import './FullEventData.css'
import CloseIcon from '@mui/icons-material/Close';
import TableTickets from '../../../components/TableTickets/TableTickets';
import QrScanner from '../../../components/QrScanner/QrScanner';




export default function FullEventData({eventData }) {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
};
  const [showFullEvent, setshowFullEvent] = useState(false);

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

            <div className='exitBT buttonHoverEfect' onClick={switchshowFullEvent}><CloseIcon/></div>
        <div className="imgSection">
          <img src={eventData.img} alt={eventData.name} />
          {/* <QrScanner
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
          /> */}          <div>
            <h4>תאריך:</h4>
            <p> {eventDateFormatIL(eventData.eventDate)}</p>
            <h4>מיקום:</h4>
            <p>{eventData.location}</p>
          </div>
        </div>

        <div className='ticketSection'>
          <TableTickets eventID={eventData._id} />
        </div>
        <h2>{eventData.name}</h2>
        <div>
          גשדגשג
        </div>
        <h3>מארגן: {eventData.organizer}</h3>
        
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
