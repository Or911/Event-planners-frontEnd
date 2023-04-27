import React, { useEffect, useState } from 'react'
import './TableTickets.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getTicketsOfEvent } from '../../ServerAPI/UserDataAPI';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


export default function TableTickets({eventID }) {
    const [tickets , setTickets] = useState([])

    useEffect(()=>{
        getTicketsOfEvent(eventID)
        .then(tickets =>{
            setTickets(tickets.data)
            console.log(tickets);
        })
    },[])

  return (
    <>
    <h4>רשימת כרטיסים</h4>
    <div className='tableTickets'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody className='mobileTableCard'>
          {tickets.map((ticket , index) => (
            <StyledTableRow key={ticket._id} >
              <StyledTableCell align="right" className={ticket.isScanned?'usedTicket':null}>כרטיס: {index+1}</StyledTableCell >
              <StyledTableCell align="right" className={ticket.isScanned?'usedTicket removeInMobile':'removeInMobile'}>מזהה כרטיס:  {ticket._id}</StyledTableCell >
              <StyledTableCell align="right" className={ticket.isScanned?'usedTicket':null}>מחיר כרטיס:{ticket.price}</StyledTableCell>
              <StyledTableCell align="right" className={ticket.isScanned?'usedTicket':null}><img src={ticket.qrCode}  alt='QRcode' /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}
