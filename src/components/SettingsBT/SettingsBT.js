import React, { useState } from 'react'
import './SettingsBT.css'
import SettingsIcon from '@mui/icons-material/Settings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { deleteEvent } from '../../ServerAPI/EventAPI';

export default function SettingsBT({eventId}) {
    const [edit , switchEdit] = useState(false)

    function switchEditing(){
        console.log(1);
        if(edit){
            switchEdit(false)
        }
        else{
            switchEdit(true)
        }
    }

  return (
    <div >
        <div className={edit?"open":"locked"}>
        {edit?<LockOpenIcon onClick={switchEditing} className='buttonHoverLow'/>:<LockIcon onClick={switchEditing} className='buttonHoverLow'/>}
        <button onClick={() => deleteEvent(eventId)}> Delete </button>
        </div>

    </div>
  )
}
