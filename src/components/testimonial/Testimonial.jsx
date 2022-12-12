

import React from 'react'
import "./testimonial.css"

import Slider from "react-slick"

import {Container,Row,Col} from "reactstrap"

import client1 from "../../assets/images/client01.jpg"
import client2 from "../../assets/images/client02.jpg"
import client3 from "../../assets/images/client03.jpg"

const testimopnialData = [
    {
        name:"Martin Cooper",
        testimony:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae facere aperiam incidunt repellendus perspiciatis rem voluptatem laudantium reiciendis provident minus, aliquam expedita quibusdam pariatur saepe sint delectus, quo perferendis quaerat ipsum ex tempore sequi illo suscipit. Neque quam molestiae accusantium!",
        profession:"Wev Developer",
        imgUrl:client1
    },
    {
        name:"Brad Mavrik",
        testimony:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae facere aperiam incidunt repellendus perspiciatis rem voluptatem laudantium reiciendis provident minus, aliquam expedita quibusdam pariatur saepe sint delectus, quo perferendis quaerat ipsum ex tempore sequi illo suscipit. Neque quam molestiae accusantium!",
        profession:"Graphic Designer",
        imgUrl:client2
    },
    {
        name:"Martin Cooper",
        testimony:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae facere aperiam incidunt repellendus perspiciatis rem voluptatem laudantium reiciendis provident minus, aliquam expedita quibusdam pariatur saepe sint delectus, quo perferendis quaerat ipsum ex tempore sequi illo suscipit. Neque quam molestiae accusantium!",
        profession:"Architect",
        imgUrl:client3
    },
]


const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        swipeToSlide:true
      }

  return (
    <section>
        <Container >
            <Row >
                <Col lg="12" className='mb-5 text-center'>
                    <h2>What my clients says</h2>
                </Col>

                <Col lg="6" className='m-auto px-5'>
                    <Slider {...settings} >

                        {
                            testimopnialData.map((data,index)=>(
                              
                                <div className="single__testimonial" key={index}>
                                    <p>
                                       {data.testimony}
                                    </p>
                                    <div className='d-flex gap-2 '>
                                        <div className='client__img'>
                                            <img src={data.imgUrl} alt="" className='w-100 h-100'/>
                                        </div>
                                        <div>
                                            <h6>{data.name}</h6>
                                            <p className='title'>{data.profession}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                       
                            ))
                        }
                       
                    </Slider>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Testimonial