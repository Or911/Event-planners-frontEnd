import React, {useState} from "react";
  import QrReader from "react-web-qr-reader";
  import './QrScanner.css'
import { confirmTicket } from "../../ServerAPI/UserDataAPI";
  
  const QrScanner = ({eventID , cardValidation}) => {
    const delay = 10000;
    
  
    const previewStyle = {
      height: 240,
      width: 320
    };
  
    const [result, setResult] = useState("לא זוהה כרטיס");
  
    const handleScan = (result) => {
      if (result) {
        setResult("מזהה כרטיס : " + result.data)
        console.log(1)
        confirmTicket(eventID ,result.data ).then((result)=>{
          console.log(result)
          cardValidation(result.data)
        }).catch(error =>{
          cardValidation(error.response.data);
        })
        
      }
    };
  
    const handleError = (error) => {
      cardValidation(error.response.data);
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
  