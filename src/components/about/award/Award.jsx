

import React from 'react'
import "./award.css"
const awardList = [
    {
        year:"2018",
        title:"Best FrontEnd Developer",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, repellat."
    },
    {
        year:"2020",
        title:"Best BackEnd Developer",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, repellat."
    },
    {
        year:"2020",
        title:"Empolyee of the Year",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, repellat."
    },
    {
        year:"2022",
        title:"Honurable Mention",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, repellat."
    },
]

const Award = () => {
  return (
    <div className="award__container d-flex flex-wrap align-items-center gap-3">
             
        {
            awardList.map((award,index)=><AwardItem award={award} key={index}/>)
        }
 
    </div>
  )
}

const AwardItem = ({award})=>{
    return (
        <div className="award__item ">
            <div className="single__award ">
                <div className="award__year">{award.year}</div>
                <h6 className="award__title">{award.title} - <span>{award.desc}</span></h6>
            </div>
        </div>
    )
}

export default Award