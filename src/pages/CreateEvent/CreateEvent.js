import React from 'react'
import './CreateEvent.css'
import { useState } from 'react'
import axios from 'axios'
import { uploadImg } from '../../utilities/uploadImg';
import ButtonBack from '../../components/NavBar/ButtonBack/ButtonBack';
import { MdCloudUpload } from 'react-icons/md'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

export default function CreateEvent() {
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
    console.log(imgUrl);

    axios({
      method: 'post',
      url: 'http://localhost:4000/event',
      data: {
        name: name,
        entertainer: entertainer,
        category: category,
        description: description,
        price: [{ "standard": price }],
        like: like,
        location: location,
        eventDate: eventDate,
        dateCreated: dateCreated,
        // img: imgUrl,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }).then(data => console.log(data))

    setName('');
    setEntertainer('');
    setCategory('');
    setDescription('');
    setPrice('');
    setLike('');
    setLocation('');
    setEventDate('');
    setDateCreated('');
    // document.getElementById('imgInput').reset()
  }

  return (

    <div className='page event-create'>
      <form >
        <div className='createEvent'>
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
            <div>
              <h4> <TextField type="date" className='date' onChange={event => setEventDate(event.target.value)} value={eventDate} /></h4>

              <h4><TextField id="outlined-basic" className='location' label="Location" type="text" onChange={event => setLocation(event.target.value)} value={location} /> </h4>
            </div>

          </div>
          <br></br>
          <TextField id="outlined-basic" label="name" onChange={event => setName(event.target.value)} value={name} />
          <br></br>
          <br></br>
          <hr />

          <TextField id="outlined-basic" label="Entertainer" variant="outlined" onChange={event => setEntertainer(event.target.value)} value={entertainer} />
          <br></br>
          <br></br>
          <TextField id="outlined-basic" label="Category" onChange={event => setCategory(event.target.value)} value={category} />
          <br></br>
          <br></br>
          <TextField
            label="Description"
            multiline
            minRows={2}
            maxRows={3}
            onChange={event => setDescription(event.target.value)}
            value={description} />
          <br></br>
          <br></br>
          <hr />
          <Button variant="outlined" className='buttonSubmitCreate' onClick={addEvent}>Create</Button>
          <div className="price">
            <TextField
              label="Price"
              type="number"
              id="outlined-basic"
              defaultValue={price}
              onChange={event => setPrice(event.target.value)}
              value={price}
            />
          </div>
        </div>

      </form>

    </div>

  )
}
