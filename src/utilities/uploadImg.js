import axios from 'axios';
import {UPLOAD_IMG_URL} from './conectsToAPIs'


function uploadImg(img){
var form = new FormData();
form.append("image", img);

var settings = {
  "url": UPLOAD_IMG_URL,
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

return axios(settings).then(response => response.data.data.url)
}
export {uploadImg  }