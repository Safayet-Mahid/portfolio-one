import React, { useState } from 'react'
import {Container} from "reactstrap"
import "./header.css"

const navLinks = [
    {
        display:"Home",
        url:"#home"
    },
    {
        display:"About",
        url:"#about"
    },
    {
        display:"Services",
        url:"#services"
    },
    {
        display:"Portfolio",
        url:"#portfolio"
    },
    {
        display:"Contact",
        url:"#contact"
    },
]

const Header = () => {

    const [scrolled,setScrolled] = useState(false)
    const [hambtnClicked,setHambtnClicked] = useState(false)

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
     };

    window.addEventListener('scroll', changeNavbarColor);
  
     

  return (
    <header className={`header d-flex align-items-center ${scrolled && "header__shrink"}`}>
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h5>Jhonathon</h5>
                </div>

                <div className={`nav__menu ${hambtnClicked && "menu__active"}`}  onClick={()=>setHambtnClicked(!hambtnClicked)}>
                    <ul className="nav__list">

                        {
                            navLinks.map((item,index)=> <li className="nav__item" key={index}>
                            <a href={item.url}>{item.display}</a>
                        </li>)
                        }
                    
                    </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4 ">
                <button className="button">Let's Talk</button>
                <span className="mobile__menu">
                    <i className="ri-menu-5-line" onClick={()=>setHambtnClicked(!hambtnClicked)}></i>
                </span>
            </div>


            </div>

          

        </Container>
    </header>
  )
}

export default Header