import Event from "./EventCard/Event";
import { getEvents , getEventsCategory } from "../../ServerAPI/EventAPI";
import "./Home.css";
import { useEffect, useState } from "react";
import EventSlider from "./Slider/EventSlider";

export default function Home() {
  const [eventsCategory, setEventsCategory] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEventsCategory().then((events) => {
      setEventsCategory(events.data);
    });
    getEvents().then((events) => {
        setEvents(events.data)
    });
    console.log("Home");
  }, []);

  return (
    <div className="home page">

            <div className="Event-slider"><EventSlider events={events} /></div>

            {eventsCategory.map(({_id , events}) => (
              <>
                <h1> Category : {_id} </h1>
                <div className="eventsCategory" key={_id}>
                    
                    {events.map((e) => (<Event key={e._id} userEvent={e}/>) )
                }
                </div>
              </>  
            ))}
    </div>
  );
}
