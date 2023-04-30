import React, { useState  , useEffect} from 'react'
import Button from '@mui/joy/Button';
import { eventDateFormatIL } from '../../../utilities/eventDateFormat';
import OpenInNew from '@mui/icons-material/OpenInNew';
import './FullEventData.css'
import CloseIcon from '@mui/icons-material/Close';
import TableTickets from '../../../components/TableTickets/TableTickets';
import QrScanner from '../../../components/QrScanner/QrScanner';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { getTicketsOfEvent } from '../../../ServerAPI/UserDataAPI';
import MassageScan from './MassageScan/MassageScan';





export default function FullEventData({eventData }) {

  const [showFullEvent, setshowFullEvent] = useState(false);
  const [Scanner, setScanner] = useState(false);
  const [tickets , setTickets] = useState([])
  const [alertValidation , setAlertValidation] = useState(false)

  useEffect(()=>{
      getTicketsOfEvent(eventData._id)
      .then(tickets =>{
          setTickets(tickets.data)
          console.log("tickets");
      })
  },[])
  function cardValidation(massage){
    getTicketsOfEvent(eventData._id)
    .then(tickets =>{
        setTickets(tickets.data)
        setAlertValidation(massage )
        setTimeout(()=>{
          setAlertValidation(false)
        },3000)

    })
  }


  function switchshowFullEvent(){
    if(showFullEvent){
      setshowFullEvent(false)
    }
    else{setshowFullEvent(true)}
  }

  function turnScanner(){
    if(Scanner){
      setScanner(false)
    }
    else{setScanner(true)}
  }
  
  if(showFullEvent){
    return (
      <>
      
      {alertValidation?<MassageScan MassageScan={alertValidation}/>:null}
      <div className='eventManagement'>

            <div className='exitBT buttonHoverEfect' onClick={switchshowFullEvent}><CloseIcon/></div>
        <div className="imgSection">
          <img src={eventData.img} alt={eventData.name} />
          {Scanner?<QrScanner eventID={eventData._id} cardValidation={cardValidation}/>:<div></div>}
         <div>
            <h4>תאריך:</h4>
            <p> {eventDateFormatIL(eventData.eventDate)}</p>
            <h4>מיקום:</h4>
            <p>{eventData.location}</p>
          </div>
        </div>

        <div className='ticketSection'>
          <TableTickets tickets={tickets} />
        </div>
        <h2>{eventData.name}</h2>
        <div>
        <Button  color="success" onClick={turnScanner} startDecorator={<CropFreeIcon/>}>
      הפעלת סורק
      </Button>
          
        </div>
        <h3>מארגן: {eventData.organizer}</h3>
        

        <div className="priceSection">
          <h4>:סוג כרטיס</h4>

        </div>
      </div>
      </>
    )
  }
  else{
    return(
      <Button className='showFullEventBT' color="warning" onClick={switchshowFullEvent} startDecorator={<OpenInNew />}>
      לפרטי האירוע
      </Button>
  )}


}
