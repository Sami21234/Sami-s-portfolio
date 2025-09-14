import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import sidebar from "../../assets/sidebarportfoliopng.png"
import lostFound from "../../assets/lostfoundaiportfolio.png"
import todo from "../../assets/todoportfolio.png"
import netflixUI from "../../assets/netflix front page.png"
import Dsainstruct from "../../assets/Chatbot1.png"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Project() {

  useGSAP(()=>{
     gsap.from("#heading", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: "#heading",
        scroll: "body",
        scrub: 3,
        start: "top 80%",
        end: "top 30%"
      }
    })

     gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 3,
        start: "top 80%",
        end: "top 30%"
      }
    })
  })

  return (
    <div id='projects'>
      <h1 id='heading'>2+ YEARS OF PROJECT EXPERIENCE</h1>
      <div className="slider">
        <Card title="CHATGPT SIDEBAR" image={sidebar} link={"https://chatgpt-sidebar-frontpage.vercel.app/"}/>
        <Card title="LOST & FOUND AI" image={lostFound} link={"https://lost-found-ai-frontend-tjo1.vercel.app/"} />
        <Card title="TODO LIST" image={todo} link={"https://to-do-app-kappa-liart-80.vercel.app/"}/>
        <Card title="NETFLIXUI CLONE" image={netflixUI} link={"https://netflix-ui-clone-eosin.vercel.app/"}/>
        <Card title="DSA INSTRUCTOR" image={Dsainstruct} link={"https://dsainstructor-bot.streamlit.app/"}/>
      </div>
    </div>
  )
}

export default Project
