import {React, useState} from 'react';
import {Container, Row, Col, Form, Input, Label, Button } from 'reactstrap';
import firstclick from '../assets/sounds/click1.wav';
import secondclick from '../assets/sounds/click2.wav';


const Metronome = () => {
    const [bpm, setBpm] = useState(40);
    const [playing, setPlaying] = useState(false);

    const chooseBpm = (event) => {
        setBpm(event.target.value);
     };

     const click1 = new Audio(firstclick);
     const click2 = new Audio(secondclick);

     const startStop = () => {
        click1.play();
     };

    return (
        <Container fluid className='metronome'>
            <Row>
                <Col>
                    <Form>
                        <Label for='chooseBpm'>{bpm} BPM</Label>
                        <Input 
                            id='chooseBpm'
                            type='range'
                            min='40'
                            max='240'
                            value={bpm}
                            onChange={chooseBpm}
                        />
                    </Form>
                    <Button
                        onClick={startStop}>
                        {playing ? 'Stop' : 'Start'}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Metronome;