import React from 'react'
import './CreateEvent.css'
import { useState } from 'react'
import axios from 'axios'
export default function CreateEvent() {
  let id = 0
  const eventId = useState(id)
  id += 1
  const [name, setName] = useState("")
  const [organizer, setOrganizer] = useState("")
  const [entertainer, setEntertainer] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [like, setLike] = useState([])
  const [location, setLocation] = useState("")
  const [eventDate, setEventDate] = useState(new Date())
  const [dateCreated, setDateCreated] = useState(new Date())
  const [img, setImg] = useState("")


  const addEvent = (event) => {
    
    axios({
      method:'post',
      url:'http://localhost:4000/events',
      data: {
        eventId: eventId,
        name: name,
        organizer: organizer,
        entertainer: entertainer,
        category: category,
        description: description,
        price: [{"standard":price}],
        like: like,
        location: location,
        eventDate: eventDate,
        dateCreated: dateCreated,
        img:img,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });
    setName('');
    setOrganizer('');
    setEntertainer('');
    setCategory('');
    setDescription('');
    setPrice('');
    setLike('');
    setLocation('');
    setEventDate('');
    setDateCreated('');
    setImg('');
  }

  /*async function selectedImg(event){
    let img = await uploadImg(event.target.files[0])
    console.log(img)
  }*/
    
  return (
    
      <div className='eventCreate '>
        <form >
          <div className="eventDiv">
            <input
              placeholder="name"
              type="text"
              onChange={event => setName(event.target.value)}
              value={name}
            />
          </div>

          <div className="eventDiv">
            <input
              placeholder="Organizer"
              type="text"
              onChange={event => setOrganizer(event.target.value)}
              value={organizer}
            />
          </div>

          <div className="eventDiv">
            <input
              placeholder="Entertainer"
              type="text"
              onChange={event => setEntertainer(event.target.value)}
              value={entertainer}
            />
          </div>

          <div className="eventDiv">
            <input
              placeholder="Category"
              type="text"
              onChange={event => setCategory(event.target.value)}
              value={category}
            />
          </div>

          <div className="eventDiv">
            <input
              placeholder="Description"
              type="text"
              onChange={event => setDescription(event.target.value)}
              value={description}
            />
          </div>
          <div className="eventDiv">
            <input
              placeholder="Price"
              type="number"
              onChange={event => setPrice(event.target.value)}
              value={price}
            />
          </div>
          <div className="eventDiv">
            <input
              
              placeholder="Location"
              type="text"
              onChange={event => setLocation(event.target.value)}
              value={location}
            />
          </div>
          <div className="eventDiv">
            <input
              type="date"
              onChange={event => setEventDate(event.target.value)}
              value={eventDate}
              />
          </div>

          <div className="eventDiv">
          <input 
          type="file" 
          multiple accept="image/*" 
          onChange={event => setEventDate(event.target.value)}
          value={img}
           />
          </div>
          <button className="btn" onClick={addEvent} type="submit" >Create</button>
        </form>
      </div>
  
  )
}
