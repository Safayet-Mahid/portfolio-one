import React from 'react'
import "./skills.css"

const frontendSkills = [
    {
        title:"Javascript",
        percentage:"85%"
    },
    {
        title:"ReactJs",
        percentage:"92%"
    },
    {
        title:"Redux",
        percentage:"65%"
    },
    {
        title:"Next Js",
        percentage:"72%"
    },
]

const backendSkills = [
    {
        title:"Node Js",
        percentage:"85%"
    },
    {
        title:"Express js",
        percentage:"85%"
    },
    {
        title:"MongoDB",
        percentage:"85%"
    },
    {
        title:"socket.io",
        percentage:"85%"
    },
]

const Skills = () => {
  return (
    <div className="skills__wrapper d-flex gap-5">

    <div className="frontend__skill w-50">

        {
            frontendSkills.map((skill,index)=>(
                <SkillItem key={index} skill={skill}/>
            ))
        }

    </div>

    <div className="backend__skill w-50">
    {
          backendSkills.map((skill,index)=>(
                <SkillItem key={index} skill={skill}/>
            ))
        }
    </div>

    </div>
  )
}

const SkillItem =({skill})=>{

    return (
    <div className="skill__data mb-3" >
        <div className="skill__title d-flex align-items-center justify-content-between">
            <h6>{skill?.title}</h6>
            <span>{skill?.percentage}</span>
        </div>

        <div className="skill__bar">
            <span className="skill__bar-percentage" style={{width:`${skill.percentage}`}}></span>
        </div>
    </div>)
}

export default Skills