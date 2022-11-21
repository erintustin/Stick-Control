import {React, useState} from 'react';
import {Container, Row, Col, Form, Input, Label, Button } from 'reactstrap';


const Metronome = () => {
    const bpm = useState(60);
    const [playing, setPlaying] = useState(false);

    return (
        <Container fluid className='metronome'>
            <Row>
                <Col>
                    <Form>
                        <Label for='bpm'>{bpm} BPM</Label>
                        <Input 
                            id='bpm'
                            type='range'
                            min='40'
                            max='240'
                            value={bpm}
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