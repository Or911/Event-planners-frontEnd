import React, {useState} from "react";
  import QrReader from "react-web-qr-reader";
  import './QrScanner.css'
import { confirmTicket } from "../../ServerAPI/UserDataAPI";
  
  const QrScanner = ({eventID}) => {
    const delay = 500;
  
    const previewStyle = {
      height: 240,
      width: 320
    };
  
    const [result, setResult] = useState("לא זוהה כרטיס");
  
    const handleScan = (result) => {
      if (result) {
        setResult("מזהה כרטיס : " + result.data)
        confirmTicket(eventID ,result.data )
        
      }
    };
  
    const handleError = (error) => {
      console.log(error);
    };
  
    return (
      <div className="">
        <QrReader className="QrScanner"
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        <p className="resultQR">{result}</p>
      </div>
    );
  };
  
  export default QrScanner;
  