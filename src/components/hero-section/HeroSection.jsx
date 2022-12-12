

import React,{useEffect, useRef} from 'react'
import { init } from 'ityped'
import { Col, Container, Row } from 'reactstrap'
import "./hero.section.css"

import heroImage from "../../assets/images/heroImg.jpg"

const HeroSection = () => {

    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current,{
            backDelay:1500,
            showCursor:true,
            strings:[
                "Johnathon Maa",
                "a Web Developer",
                "Content Creator",
                "Partime Phtographer"
            ]
        })
    },[])
  return (
    <section className='hero__section' id='home'>
        <Container>
            <Row className='hero__row'>
                <Col lg="6" md="6">
                    <div className="hero__content">

                        <p className='mb-3'>Welcome to my world!</p>
          
                        <h2 className='hero__title mb-5'>I'm <span ref={textRef}></span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate cumque facilis maxime, nostrum dolorum aut aspernatur mollitia culpa ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, expedita. </p>

                        <div className="hero__btns mt-5 d-flex align-items-center gap-4">
                            <button className="button hire__btn">
                                <a href="#">Hire Me</a>
                            </button>
                            <button className="button">
                                <a href="#">Contact</a>
                            </button>
                        </div>
                    </div>
                </Col>


                <Col lg="6" md="6">
                    <div className="hero__img">
                        <img src={heroImage} alt="" className='w-100 h-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection