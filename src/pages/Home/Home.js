import Event from "./EventCard/Event";
import { getEvents , getEventsCategory } from "../../ServerAPI/EventAPI";
import "./Home.css";
import { useEffect, useState } from "react";
import EventSlider from "./Slider/EventSlider";
import { MenuItem, Select } from "@mui/material";

export default function Home() {
  const [eventsCategory, setEventsCategory] = useState([]);
  const [events, setEvents] = useState([]);

  const [filterData , setFilterData] = useState({categoryFilter: '' , dateFilter: ''})

  const handleChange = (event) => {
    setFilterData({...filterData , [event.target.name] : event.target.value});
  };

  useEffect(() => {
    getEventsCategory(filterData.categoryFilter).then((events) => {
      setEventsCategory(events.data);
    });
    getEvents().then((events) => {
        setEvents(events.data)
    });
    console.log("Home");
  }, [filterData.categoryFilter]);
  
  return (
    <div className="home page">

      <div className="events-filters">
        <Select value={filterData.categoryFilter} onChange={handleChange} name="categoryFilter" displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value="">
            <em>כל קטגוריה</em>
          </MenuItem>

          {eventsCategory?.map(({_id}) => <MenuItem value={_id}> {_id} </MenuItem>)}
        </Select>
      </div>

      {eventsCategory.map(({_id , events}) => (
        <>
          <h1> {_id} </h1>
          <div className="eventsCategory" key={_id}>    
            {events.map((e) => (<Event key={e._id} userEvent={e}/>) )
          }
          </div>
        </>  
      ))}
    </div>
  );
}
