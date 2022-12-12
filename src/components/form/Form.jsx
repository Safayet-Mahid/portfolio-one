

import React, { useState } from 'react'
import "./form.css"

const Form = () => {
    
    const initialData = {name:"",email:'',message:"" }
    const[data,setData] = useState(initialData)

    const handleData = (e)=>{
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(data)
        setData(initialData)

    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className="form__input">
            <input type="text" name='name' value={data.name} placeholder='Your Name' onChange={handleData} />
        </div>


        <div className="form__input">
            <input type="text" name='email' value={data.email} placeholder='Your Email'  onChange={handleData}/>
        </div>
        
        <div className="form__input">
            <textarea rows="10" name='message' value={data.message} placeholder='Write Message' onChange={handleData}></textarea>
               </div>

        <button className='submit__btn' type="submit">Submit</button>

    </form>
  )
}

export default Form