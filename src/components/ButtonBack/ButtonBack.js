import React from 'react'
import { useNavigate} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './ButtonBack.css'

export default function ButtonBack() {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(-1)} className='CloseBT'><CloseIcon/></div>
  )
}
