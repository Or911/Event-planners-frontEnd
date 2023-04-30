import React from 'react'
import './CreateEvent.css'
import { useState } from 'react'
import axios from 'axios'
import { uploadImg } from '../../utilities/uploadImg';
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import { MdCloudUpload } from 'react-icons/md'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { SERVER_URL } from '../../utilities/conectsToAPIs';


export default function CreateEvent({ updateNotificationData }) {
  const [name, setName] = useState("")
  const [entertainer, setEntertainer] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState()
  const [like, setLike] = useState([])
  const [location, setLocation] = useState("")
  const [eventDate, setEventDate] = useState(new Date())
  const [dateCreated, setDateCreated] = useState(new Date())
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("null")

  const addEvent = async () => {
    let imgUrl = await uploadImg(document.getElementById('image').files[0])
    axios({
      method: 'post',
      url: SERVER_URL + 'event',
      data: {
        name: name,
        entertainer: entertainer,
        category: category,
        description: description,
        price: [{ "standard": price }],
        likes: like,
        location: location,
        eventDate: eventDate,
        dateCreated: dateCreated,
        img: imgUrl,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }).then(data => {
      updateNotificationData('יצירת האירוע עברה בהצלחה', 'success')
      console.log(data)
    })
      .catch(err => {
        updateNotificationData('יצירת האירוע נכשלה', 'error')
        console.error(err)
      })

    setName('');
    setEntertainer('');
    setCategory('');
    setDescription('');
    setPrice('');
    setLike('');
    setLocation('');
    setEventDate('');
    setDateCreated('');
    setImage('');
    // document.getElementById('imgInput').reset()
  }

  return (

    <div className='page cardEvent'>
      <form >
        <div className=''>
          <ButtonBack />
          <div className='imgSection'>
            <div className="imgUplodform" onClick={() => document.querySelector(".input-field").click()}>
              <input id='image' type="file" multiple accept="image/*" className='input-field' hidden
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name)
                  if (files) {
                    if (files['length'] === 0) {
                      setImage(null)
                      setFileName("No selected File")
                    } else {
                      setImage(URL.createObjectURL(files[0]))
                    }
                  }
                  else {

                  }
                }}
              />
              {image ?
                <img src={image} alt={fileName} />
                :
                <MdCloudUpload color='#1475cd' size={60} />
              }
            </div>


          </div>


          <br></br>
          <TextField name='date' type="date" className='date' onChange={event => setEventDate(event.target.value)} value={eventDate} />
          <br></br>
          <br></br>
          <TextField name='location' id="outlined-basic" className='location' label="מיקום" type="text" onChange={event => setLocation(event.target.value)} value={location} />
          <br></br>
          <br></br>
          <TextField name='name' id="outlined-basic" label="שם" onChange={event => setName(event.target.value)} value={name} />
          <br></br>
          <br></br>
          <hr />
          <br></br>

          <TextField name='entertainer' id="outlined-basic" label="בדרן" variant="outlined" onChange={event => setEntertainer(event.target.value)} value={entertainer} />
          <br></br>
          <br></br>
          <TextField name='category' id="outlined-basic" label="קטגוריה" onChange={event => setCategory(event.target.value)} value={category} />
          <br></br>
          <br></br>
          <TextField
            name='description'
            label="תיאור"
            multiline
            minRows={2}
            maxRows={3}
            onChange={event => setDescription(event.target.value)}
            value={description} />
          <br></br>
          <br></br>
          <div className="price">
            <TextField
            name='price'
              label="מחיר"
              type="number"
              id="outlined-basic"
              defaultValue={price}
              onChange={event => setPrice(event.target.value)}
              value={price}
            />
          </div>
          <br></br>
          <hr />
          <br></br>

          <Button variant="outlined" className='buttonSubmitCreate' onClick={addEvent}>יצירת מופע</Button>


        </div>
      </form>

    </div>

  )
}
