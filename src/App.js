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


function App() {
  const [isLogin , updateIsLogin] = useState(false)

  function updateLoggedIn(isLog){
    if(isLog){updateIsLogin(true)}
    else{updateIsLogin(false)}
  }
  useEffect(()=>{
    if(localStorage.getItem("token")){
      updateIsLogin(true)
    }
    
  },[])

  return (
    <Router>
      <img src={background} className="background" alt=""/>
      <NavBar isLogin={isLogin} updateLoggedIn={updateLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<AccountConnection updateLoggedIn={updateLoggedIn}/>}/>
        <Route path="/createEvent" element={<CreateEvent/>}/>
        <Route path="/tickets" element={<Tickets/>}/>
        <Route path="/AboutUs" />
        <Route path="/events/:id" element={<EventDetails/>} />
        <Route path="/profile" element={<ProfileData/>} />
      </Routes>
    </Router>
  )
}

export default App;
