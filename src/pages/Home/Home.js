import { Container } from "@mui/material";
import Event from "./EventCard/Event";
import { getEvents } from "../../ServerAPI/EventAPI";
import "./Home.css";
import { useEffect, useState } from "react";
import EventSlider from "./Slider/EventSlider";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((events) => {
      setEvents(events.data);
    });
    console.log("Home");
  }, []);

  return (
    <div className="home page">
      <Container maxWidth="sm">
        <Event event={events[0]}/>
        <EventSlider events={events} />
      </Container>
    </div>
  );
}
