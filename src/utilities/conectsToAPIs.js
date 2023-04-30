 
 const SERVER_URL = process.env.REACT_APP_SERVER_URI? process.env.REACT_APP_SERVER_URI
  : "https://events-servises.onrender.com/";

  const UPLOAD_IMG_URL = process.env.REACT_APP_IMG_API? process.env.REACT_APP_IMG_API
  : null;

export { SERVER_URL, UPLOAD_IMG_URL}
