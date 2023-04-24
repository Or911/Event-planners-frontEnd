import React, { useState } from 'react'
import './SettingsBT.css'
import SettingsIcon from '@mui/icons-material/Settings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';

export default function SettingsBT() {
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
    <div>
     <p onClick={switchEditing}><SettingsIcon fontSize='large' className='buttonSettings' /></p>
        <div className={edit?"open":"locked"}>
        {edit?null:<LockIcon/>}
        </div>

    </div>
  )
}
