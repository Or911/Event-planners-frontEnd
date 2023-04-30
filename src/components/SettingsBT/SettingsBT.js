
import './SettingsBT.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEvent } from '../../ServerAPI/EventAPI';


export default function SettingsBT({eventId}) {

  return (
    <div >

            <span className='buttonRemoveEvent' onClick={() => deleteEvent(eventId)}><DeleteIcon fontSize='large'/></span>

    </div>
  )
}
