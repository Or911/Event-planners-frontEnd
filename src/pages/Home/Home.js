import { Container } from "@mui/material";
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
        <Container maxWidth="lg">

            <Event userEvent={events[0]}/>
            <EventSlider events={events} />

            {eventsCategory.map(({_id , events}) => (
                <div className="eventsCategory" key={_id}>
                    <h1> Category : {_id} </h1>
                    {events.map((e) => (<Event key={e._id} userEvent={e}/>) )
                }
                </div>
            ))}
      </Container>
    </div>
  );
}
