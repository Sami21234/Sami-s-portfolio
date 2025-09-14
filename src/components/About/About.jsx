import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import frontendimg from "../../assets/frontendblackbg-removebg-preview.png"
import powerBI from "../../assets/powerbipng.png"
import django from "../../assets/djangoportfolio-removebg-preview.png"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 3,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".line", {
      x: -100,
      duration: 0.8,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 3,
        start: "top 60%",
        end: "top 35%"
      }
    })

    gsap.from(".aboutDetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".aboutDetails h1",
        scroll: "body",
        scrub: 3,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".aboutDetails li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".aboutDetails li",
        scroll: "body",
        scrub: 3,
        start: "top 60%",
        end: "top 30%"
      }
    })

    gsap.from(".rightAbout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".rightAbout",
        scroll: "body",
        scrub: 3,
        start: "top 60%",
        end: "top 30%"
      }
    })
  })

  return (
    <div id='about'>

      <div className="leftAbout">

        <div className="circle-Line">

          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>


        </div>

        <div className="aboutDetails">

          <div className="presonalInfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME</span> : MOHD. SAMI</li>
              <li><span>AGE</span> : 19 YEARS</li>
              <li><span>GENDER</span> : MALE</li>
              <li><span>LANGUAGE KNOWN</span> : HINDI,ENGLISH</li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE</span> : BACHELOR'S IN ENGINEERING</li>
              <li><span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING</li>
              <li><span>CGPA</span> : 8.6</li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>FRONTEND DEVELOPER</li>
              <li>MICROSOFT POWER BI</li>
              <li>DJANGO</li>
            </ul>
          </div>

        </div>

      </div>

      <div className="rightAbout">
        <Card title="FRONTEND DEVELOPER" image={frontendimg} />
        <Card title="MICROSOFT POWER BI" image={powerBI} />
        <Card title="DJANGO" image={django} />
      </div>
    </div>
  )
}

export default About
