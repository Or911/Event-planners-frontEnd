import { Container } from '@mui/material'
import Event from './EventCard/Event'
import './Home.css'
import { useEffect, useState } from 'react'
import EventSlider from './Slider/EventSlider';

export default function Home(){
    const [events, setEvents] = useState([]);

    async function getEvents() {
        return Promise.resolve().then(() => [1, 2, 3, 4, 5, 6])
    }

    useEffect(() => {
        const getEventsData = async function () {
          let EventsData = await getEvents();
          setEvents(EventsData);
        };
        getEventsData();
      });

    return(
        <div className="home page">
            <Container maxWidth="sm">
                <Event></Event>
            </Container>
            <Container maxWidth="sm">
                <EventSlider events={events}/>
            </Container>
        </div>
    )
}