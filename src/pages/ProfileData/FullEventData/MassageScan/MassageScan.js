import React from 'react'
import './MassageScan.css'

export default function MassageScan({MassageScan}) {
    console.log(MassageScan);
  return (
    <div >
        {MassageScan.success?<h3 className='successAlertQRcode'>{MassageScan.success}</h3>:<h3 className='errorAlertQRcode'>{MassageScan.error}</h3>}
        
    </div>
  )
}
