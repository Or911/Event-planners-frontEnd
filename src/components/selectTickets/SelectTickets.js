import React, { useState } from 'react'
import './SelectTickets.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SelectTickets({tickets ,updatePriceTicket}) {
    const [ticket , setTicket] = useState('')

    const handleChange = (event) => {
        setTicket(event.target.value);
        updatePriceTicket(event.target.value)
      };

  return (
    <div>
    <Select
          value={ticket}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>בחר כרטיס</em>
          </MenuItem>
          {tickets?.map(ticket => [Object.keys(ticket).map(k => <MenuItem value={ticket[k]}>{ticket[k]} {k}</MenuItem>)])}
        </Select>
        </div>
  )
}
