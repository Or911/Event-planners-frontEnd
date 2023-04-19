import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import background from '../src/img/backgroundAPP.jpg'
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import AccountConnection from "./pages/AccountConnection/AccountConnection";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import { useState } from 'react';
import EventDetails from "./pages/EventDetails/EventDetails";

function App() {
  const [isLogin , updateIsLogin] = useState(false)

  function updateLoggedIn(isLog){
    if(isLog){updateIsLogin(true)}
    else{updateIsLogin(false)}
  }

  return (
    <Router>
      <img src={background} className="background"/>
      <NavBar isLogin={isLogin} updateLoggedIn={updateLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<AccountConnection updateLoggedIn={updateLoggedIn}/>}/>
        <Route path="/createEvent" element={<CreateEvent/>}/>
        <Route path="/AboutUs" />
        <Route path="/events/:id" element={<EventDetails/>} />
      </Routes>
    </Router>
  )
}

export default App;
