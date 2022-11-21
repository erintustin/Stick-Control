import {React, useState} from 'react';
import {Container, Row, Col, Form, Input, Label, Button } from 'reactstrap';


const Metronome = () => {
    const [bpm, setBpm] = useState(40);
    const [playing, setPlaying] = useState(false);

    const chooseBpm = (event) => {
        setBpm(event.target.value);
     };

    console.log(bpm);
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
                    <Button>
                        {playing ? 'Stop' : 'Start'}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Metronome;