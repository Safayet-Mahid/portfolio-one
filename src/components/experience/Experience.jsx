

import React from 'react'
import "./experience.css"

import {Container,Row,Col} from "reactstrap"

const experienceData = [
    {
        year:"2020-2021",
        title: " Sr. Frontend Developer",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui dolorum dicta similique officia. Impedit?"
    },
    {
        year:"2019-2019",
        title: " Sr. Backend Developer",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui dolorum dicta similique officia. Impedit?"
    },
    {
        year:"2019-2020",
        title: " Jr. Frontend Developer",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui dolorum dicta similique officia. Impedit?"
    },
]

const Experience = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <h2 className='mb-5'>Experience</h2>
                </Col>

                <Col lg="6" md="6">

                    <div className="single__experience-container">
                        
                    {
                        experienceData.map((experience,index)=>(
                            <div className="single__experience" key={index}>
                                <span className='experience__icon'>
                                    <i className='ri-briefcase-line'></i>
                                </span>
                                <h6>{experience.year}</h6>
                                <h5>{experience.title}</h5>
                                <p>{experience.desc}</p>
                            </div>

                        ))
                    }
                      
                    </div>
                </Col>

                <Col lg="6" md="6">

                    <div className="single__experience-container">
                        
                    {
                        experienceData.map((experience,index)=>(
                            <div className="single__experience" key={index}>
                                <span className='experience__icon'>
                                    <i className='ri-briefcase-line'></i>
                                </span>
                                <h6>{experience.year}</h6>
                                <h5>{experience.title}</h5>
                                <p>{experience.desc}</p>
                            </div>

                        ))
                    }
                      
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Experience