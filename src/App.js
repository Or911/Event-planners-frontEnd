import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import background from '../src/img/backgroundAPP.jpg'
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import AccountConnection from "./pages/AccountConnection/AccountConnection";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import { useEffect, useState } from 'react';
import EventDetails from "./pages/EventDetails/EventDetails";
import Tickets from "./pages/Tickets/Tickets";
import ProfileData from "./pages/ProfileData/ProfileData";
import SnackbarAlerts from "./components/SnackBar/SnackbarAlerts";

function App() {
  const [isLogin , updateIsLogin] = useState(false)
  const [notificationData , setNotificationData] = useState({message : "" , severity: ""})

  function updateLoggedIn(isLog){
    if(isLog){updateIsLogin(true)}
    else{updateIsLogin(false)}
  }

  function updateNotificationData(message , severity){
    setNotificationData({message : message , severity : severity})
  }

  useEffect(()=>{
    if(localStorage.getItem("token")){
      updateIsLogin(true)
    }
    
  },[])

  return (
    <Router  basename="/">
      <img src={background} className="background" alt=""/>
      <NavBar isLogin={isLogin} updateLoggedIn={updateLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<AccountConnection updateLoggedIn={updateLoggedIn} updateNotificationData={updateNotificationData}/>}/>
        <Route path="/createEvent" element={<CreateEvent updateNotificationData={updateNotificationData}/>}/>
        <Route path="/tickets" element={<Tickets/>}/>
        <Route path="/AboutUs" />
        <Route path="/profile" element={<ProfileData/>} />
        <Route path="/events/:id" element={<EventDetails updateNotificationData={updateNotificationData}/>} />
      </Routes>
      <SnackbarAlerts notificationData={notificationData}/>
    </Router>
  )
}

export default App;
