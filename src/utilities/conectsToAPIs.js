 
 const SERVER_URL = process.env.EVENTS_SERVISES_SERVER_URI? process.env.EVENTS_SERVISES_SERVER_URI
  : "https://events-servises.onrender.com/";

  const UPLOAD_IMG_URL = process.env.UPLOAD_IMG_SERVER_URI? process.env.UPLOAD_IMG_SERVER_URI
  : null;

export { SERVER_URL, UPLOAD_IMG_URL}
