
import React, { useState } from 'react'
import "./about.css"

import {Container,Row,Col} from "reactstrap"

import Education from './education/Education'
import Skills from './skills/Skills'
import Award from './award/Award'
import Info from './info/Info'

const About = () => {

    const [active,setActive] = useState("About")


  return (
    <section id='about'>
        <Container>
            <Row>
                <Col lg="12" className='mb-5'>
                    <h2>About Me</h2>
                </Col>
                <Col lg="4" md="3" >
                    <div className="about__btns d-flex flex-column align-items-center ">
                       
                        <AboutButton name="About" active={active} setActive={setActive}/>
                        <AboutButton name="Education" active={active} setActive={setActive}/>
                        <AboutButton name="Skills" active={active} setActive={setActive}/>
                        <AboutButton name="Award" active={active} setActive={setActive}/>
                    </div>
                </Col>

                <Col lg="8" md="9" >
                    

                    {
                        active === "About" && <Info/>
                    }

                    {
                        active === "Education" && <Education/>
                    }

                    {
                        active === "Skills" && <Skills/>
                    }

                    {
                        active === "Award" && <Award/>
                    }
                  
                </Col>
            </Row>
        </Container>
    </section>
  )
}

const AboutButton = ({name,active,setActive})=>{

    const handleClick = (tab)=>{
        setActive(tab)
    }
    
    return (
        <button className={`about__btn ${active===name && "about__btn-active"}`}  onClick={()=>handleClick(name)}>{name}</button>
    )
}



export default About