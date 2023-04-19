import axios from 'axios';


function uploadImg(img){
var form = new FormData();
console.log(form)
form.append("image", img);

var settings = {
  "url": "https://api.imgbb.com/1/upload?expiration=600&key=06ee204e2f47dfe5dc6663253bd6bbd6",
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