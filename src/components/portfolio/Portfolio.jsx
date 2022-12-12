

import React from 'react'
import "./portfolio.css"

import {Container,Row,Col} from "reactstrap"

import portfolio01 from "../../assets/images/portfolio01.jpg"
import portfolio02 from "../../assets/images/portfolio2.jpg"
import portfolio03 from "../../assets/images/portfolio3.jpg"

const portfolioData = [
    {
        imgUrl : portfolio01,
        title:"React Landing Page",
        url:"#"
    },
    {
        imgUrl : portfolio02,
        title:"React Landing Page",
        url:"#"
    },
    {
        imgUrl : portfolio03,
        title:"React Landing Page",
        url:"#"
    },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <Container>
            <Row>
                <Col lg="12" className='portfolio__top mb-5' >
                    <h6>Explore my work and give a feedback</h6>
                    <h2>Portfolio</h2>
                </Col>
                
                {
                    portfolioData.map((portfolio,index)=>(
                        <Col lg="4" md="6" sm="6" key={index}>
                            <div className="portfolio__card">
                                <div className="portfolio__img ">
                                    <img src={portfolio.imgUrl} alt="" className='w-100 h-100' />
                                </div>

                                <div className="portfolio__content">
                                        <h5>{portfolio.title}</h5>
                                        <a href={portfolio.url}>View live</a>
                                </div>                 
                            </div>
                        </Col>
                    ))
                }

                
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio