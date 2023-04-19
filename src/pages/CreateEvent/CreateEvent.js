import React from 'react'
import { uplaodImg } from '../../utilitis/uploadIMG'

export default function CreateEvent() {

    async function selctedImg(event){
    let img = await uplaodImg(event.target.files[0])
    console.log(img)
  }
  return (
    <div className='page'>
        <input type="file" id="myFile" onChange={selctedImg}/>
        <input type="submit" />
    </div>
  )
}
