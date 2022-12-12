

import React from 'react'
import "./contact.css"

import {Container,Row,Col} from "reactstrap"
import Form from '../form/Form'

const Contact = () => {
  return (
    <section id="contact" className=''>
        <Container>
            <Row>
                <Col lg="12" className='mb-5'>
                    <h2>Get In Touch</h2>
                </Col>

                <Col lg="6" md="6" className=''>
                    <div className="contact__info-container d-flex align-items-center gap-5">
                        <div className="single__info-box w-50 ">
                            <h6>Address</h6>
                            <p>Brooklyn, NewYork</p>
                        </div>


                        <div className="single__info-box w-50">
                            <h6>Phone</h6>
                            <p>+00 123 456 789</p>
                        </div>
                    </div>

                    <div className="contact__info-container d-flex align-items-center gap-5">
                        <div className="single__info-box w-50">
                            <h6>Email</h6>
                            <p>support@gmail.com</p>
                        </div>


                        <div className="single__info-box w-50">
                            <h6>Location</h6>
                            <p>Dawn St, Road 4</p>
                        </div>
                    </div>
                </Col>

                <Col lg="6" md="6">
                    <Form/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact