import React, { useEffect, useState } from 'react'
import './PropfileData.css'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { getuserData } from '../../ServerAPI/UserDataAPI';
import UserEventData from './UserEventData/UserEventData';


export default function ProfileData() {
  const [userEvents , setUserEvents] = useState([])

  useEffect(()=>{
    getuserData()
    .then((listsEvents)=>setUserEvents(listsEvents.data))
    console.log('ProfileData')
  },[])

  return (
    <div className='page profilePage'>
      <div className='cardProfile'>
        <div className='userSection'>
          <ManageAccountsIcon fontSize='large'/>
          <h4>PROFILE</h4>
        </div>
        <div className='box-divs'>
          <div className='userDetails'>
            <img src=''/>
            userDetails
          </div>
          <div className=''>
            <div className='listsEvents'>
              {userEvents.map(eventData => <UserEventData eventData={eventData}/>)}
            </div>
            fgsdg
          </div>
        
        </div>
        
      </div>
    </div>
  )
}
