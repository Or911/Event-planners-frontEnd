import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import AccountConnection from "./pages/AccountConnection/AccountConnection";
import CreateEvent from "./pages/CreateEvent/CreateEvent";

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<AccountConnection/>}/>
        <Route path="/createEvent" element={<CreateEvent/>}/>
        <Route path="/AboutUs" />
      </Routes>
    </Router>
  )
}

export default App;
