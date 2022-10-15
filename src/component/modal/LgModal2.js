import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modals.css';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function LgModal() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>

            {values.map((v, idx) => (

                <Button key={idx} onClick={() => handleShow(v)}>
                    View Flats
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Button href="https://drive.google.com/file/d/1fQqzIPGCwlzdNc1HdCseH0ZtA7TtCjJ8/view" className=" btn-secondary ">
                View Brochure
            </Button>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Your Apartment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mtab">
                        <Tabs defaultActiveKey="2bhk"
                            id="fill-tab-example"
                            className="for-project"
                            fill>
                            <Tab eventKey="1bhk" title="1BHK">
                                <Card style={{ width: '18rem', margin: '22px auto' }}>
                                    <Card.Header> <h2 className='text-center'>1BHK</h2> </Card.Header>
                                    <div className="list-group">
                                        <div className="list-group-item text-center">
                                            <h3 className="area">Area : 609.99 Sqft</h3>
                                            <a href="/flat-1bhk-609.99" className='btn btn-primary'>Book</a>
                                        </div>
                                        <div className="list-group-item text-center">
                                            <h3 className="area">Area : 616.99 Sqft</h3>
                                            <a href="/flat-1bhk-616.99" className='btn btn-primary'>Book</a>
                                        </div>
                                    </div>
                                </Card>
                            </Tab>
                            <Tab eventKey="2bhk" title="2BHK">
                                <Card style={{ width: '18rem', margin: '22px auto' }}>
                                    <Card.Header> <h2 className='text-center'>2BHK</h2> </Card.Header>
                                    <div className="list-group">
                                        <div className="list-group-item text-center">
                                            <h3 className="area">Area : 1071.31 Sqft</h3>
                                            <a href="/flat-2bhk-1071.31" className='btn btn-primary'>Book</a>
                                        </div>
                                    </div>
                                </Card>
                            </Tab>
                            <Tab eventKey="3bhk" title="3BHK">
                                <Card style={{ width: '18rem', margin: '22px auto' }}>
                                    <Card.Header> <h2 className='text-center'>3BHK</h2> </Card.Header>
                                    <div className="list-group">
                                        <div className="list-group-item text-center">
                                            <h3 className="area">Area : 1441.31 Sqft</h3>
                                            <a href="/flat-3bhk-1441.31" className='btn btn-primary'>Book</a>
                                        </div>
                                        <div className="list-group-item text-center">
                                            <h3 className="area">Area : 1497.74 Sqft</h3>
                                            <a href="/flat-3bhk-1497.74" className='btn btn-primary'>Book</a>
                                        </div>
                                        <div className="list-group-item text-center">
                                            <h3 className="area">Area : 1509.97 Sqft</h3>
                                            <a href="/flat-3bhk-1509.97" className='btn btn-primary'>Book</a>
                                        </div>
                                        <div className="list-group-item text-center">
                                            <h3 className="area">Area : 1516.94 Sqft</h3>
                                            <a href="/flat-3bhk-1516.94" className='btn btn-primary'>Book</a>
                                        </div>
                                        <div className="list-group-item text-center">
                                            <h3 className="area">Area : 1612.31 Sqft</h3>
                                            <a href="/flat-3bhk-1612.31" className='btn btn-primary'>Book</a>
                                        </div>
                                    </div>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LgModal
