import { Container } from '@mui/material'
import Event from './EventCard/Event'
import './Home.css'

export default function Home(){

    return(
        <div className="home page">
            <Container maxWidth="sm">
                <Event></Event>
            </Container>
        </div>
    )
}