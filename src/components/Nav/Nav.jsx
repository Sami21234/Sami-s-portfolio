import React, { useRef } from 'react'
import { Link } from "react-scroll"
import "./Nav.css"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
function Nav() {

    let menue = useRef()
    let mobile = useRef()

    useGSAP(() => {
        let timeLine = gsap.timeline()
        timeLine.from("nav h1", {
            y: -100,
            duration: 1,
            opacity: 0
        })
        timeLine.from("nav ul li", {
            y: -100,
            duration: 0.3,
            opacity: 0,
            stagger: 1
        })
    })

    const closeMobileMenu = () => {
        mobile.current.classList.remove("activeMobile");
        menue.current.classList.remove("activehamLine");
    };

    return (
        <nav>
            <h1>PORTFOLIO</h1>
            <ul className='desktopMenue'>
                <Link to="home" activeClass='active' spy={true} smooth={true} duration={400} > <li>HOME</li> </Link>
                <Link to="about" activeClass='active' spy={true} smooth={true} duration={400} > <li>ABOUT</li> </Link>
                <Link to="projects" activeClass='active' spy={true} smooth={true} duration={600} > <li>PROJECTS</li> </Link>
                <Link to="contact" activeClass='active' spy={true} smooth={true} duration={800} > <li>CONTACT</li> </Link>
            </ul>

            <div className="hamBurger" ref={menue} onClick={() => {
                mobile.current.classList.toggle("activeMobile")
                menue.current.classList.toggle("activehamLine")

            }} >
                <div className="hamLine"></div>
                <div className="hamLine"></div>
                <div className="hamLine"></div>
            </div>

            <ul className='mobileMenue' ref={mobile} >
                <Link to="home" activeClass='active' spy={true} smooth={true} duration={400} onClick={closeMobileMenu} > <li>HOME</li> </Link>
                <Link to="about" activeClass='active' spy={true} smooth={true} duration={400} onClick={closeMobileMenu} > <li>ABOUT</li> </Link>
                <Link to="projects" activeClass='active' spy={true} smooth={true} duration={600} onClick={closeMobileMenu} > <li>PROJECTS</li> </Link>
                <Link to="contact" activeClass='active' spy={true} smooth={true} duration={800} onClick={closeMobileMenu} > <li>CONTACT</li> </Link>
            </ul>
        </nav>
    )
}

export default Nav
