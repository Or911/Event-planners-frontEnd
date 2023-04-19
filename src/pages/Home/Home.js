import { Container } from "@mui/material";
import Event from "./EventCard/Event";
import { getEventsCategory } from "../../ServerAPI/EventAPI";
import "./Home.css";
import { useEffect, useState } from "react";
import EventSlider from "./Slider/EventSlider";

export default function Home() {
  const [eventsCategory, setEventsCategory] = useState([]);

  useEffect(() => {
    getEventsCategory().then((events) => {
      setEventsCategory(events.data);
    });
    console.log("Home");
  }, []);

  return (
    <div className="home page">
        <Container maxWidth="sm">
            {eventsCategory.map(({_id , events}) => (
                <div> category : {_id}
                    <Event key={_id} userEvent={events[0]}/>
                    <EventSlider key={_id}  events={events} />
                </div>
            ))}
      </Container>
    </div>
  );
}
