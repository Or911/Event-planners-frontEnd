import React from 'react'
import { uploadImg } from '../../utilities/utilities'

export default function CreateEvent() {

    async function selectedImg(event){
    let img = await uploadImg(event.target.files[0])
    console.log(img)
  }
  return (
    <div className='page'>
        <input type="file" id="myFile" onChange={selectedImg}/>
        <input type="submit" />
    </div>
  )
}
