

import React from 'react'
import "./info.css"

import infoImg from "../../../assets/images/aboutImg.png"

const Info = () => {
  return (
    <div className="info__content__wrapper d-flex gap-5">
      <div className="info__img ">
          <img src={infoImg} alt="" className='w-100 h-100 ' />
      </div>

      <div className="info__content ">
          <h2>I'm Jhonathon Maa</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis delectus ratione a eligendi facilis deleniti accusamus officiis nostrum aliquid commodi mollitia quisquam minus, expedita dolore harum excepturi ipsam cupiditate.</p>

          <div className="social__links">
              <h6 className='mb-3'>Connect with me:</h6>
              <span><a href=""><i className='ri-facebook-line'></i></a></span>
              <span><a href=""><i className='ri-youtube-line'></i></a></span>
              <span><a href=""><i className='ri-github-line'></i></a></span>
              <span><a href=""><i className='ri-instagram-line'></i></a></span>
              <span><a href=""><i className='ri-linkedin-line'></i></a></span>
          </div>
      </div>

</div>
  )
}

export default Info