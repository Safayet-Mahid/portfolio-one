

import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./services.css"


const servicesData = [

    {
        icon : 'ri-code-line',
        title : 'Web Design',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore earum tempora ipsa porro totam eius iusto assumenda esse obcaecati?"
    },

    {
        icon : 'ri-code-s-slash-line',
        title : 'Web Development',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore earum tempora ipsa porro totam eius iusto assumenda esse obcaecati?"
    },

    {
        icon : 'ri-qr-code-line',
        title : 'App Development',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore earum tempora ipsa porro totam eius iusto assumenda esse obcaecati?"
    },

    {
        icon : 'ri-search-line',
        title : 'SEO',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore earum tempora ipsa porro totam eius iusto assumenda esse obcaecati?"
    },

    {
        icon : 'ri-landscape-line',
        title : 'Graphic Design',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore earum tempora ipsa porro totam eius iusto assumenda esse obcaecati?"
    },

    {
        icon : 'ri-gallery-line',
        title : 'UI / UX',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore earum tempora ipsa porro totam eius iusto assumenda esse obcaecati?"
    },


]

const Services = () => {
  return (
    <section id="services">
        <Container>
            <Row>
                <Col lg="12" className='services__top mb-5'>
                    <h6>Features</h6>
                    <h2>What services I provide</h2>
                </Col>

                {
                    servicesData.map((service,index)=>(
                        <Col lg="4" md="6" sm="6" key={index} className="mb-4">
                            <div className="single__service">
                                <span className="service__icon">
                                    <i className={service.icon}></i>
                                </span>

                                <h2>{service.title}</h2>
                                <p>{service.desc}</p>
                            </div>
                        </Col>
                    ))
                }

                
            </Row>
        </Container>
    </section>
  )
}

export default Services