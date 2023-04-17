import { Grid } from '@mui/material'
import React from 'react'
import './Event.css'

export default function Event() {
  return (
    <div className='event'>
        <div className='eventCard'>
            <Grid container justifyContent={'center'} spacing={2}>
            
            <Grid item xs={16}>
                <img src="https://img.freepik.com/free-vector/party-crowd-banner-against-sunset-sky_1048-12631.jpg?w=1380&t=st=1681730966~exp=1681731566~hmac=c18338cf51e2c3af5e5de80ac67f6fa74c0cced3c9fe07f35eaea181988c35b9" alt=''/>
                <div> world</div>
            </Grid>

            <Grid item xs={8}>
                <div> 23.05  Dimona , Nava David</div>
            </Grid>
            </Grid>
        </div>
    </div>
  )
}
