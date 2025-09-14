import React from 'react'
import "./Contact.css"
import contactImg from "../../assets/contact.png"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Contact() {

  useGSAP(()=>{
     gsap.from(".leftContact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: ".leftContact img",
        scroll: "body",
        scrub: 3,
        start: "top 80%",
        end: "top 30%"
      }
    })

     gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger:1,
      scrollTrigger: {
        trigger: "form",
        scroll: "body",
        scrub: 3,
        start: "top 80%",
        end: "top 30%"
      }
    })
  })

  return (
    <div id='contact'>
      <div className="leftContact">
        <img src={contactImg} alt="contactImg" />
      </div>
      <div className="rightContact">
        <form action="https://formspree.io/f/mzzayozb" method='POST' >
            <input name='Username' type="text" placeholder='Name' />
            <input name='Useremail' type="email" placeholder='Email' />
            <textarea name="Usermessage" id="text-area" placeholder="Let's connect & talk"></textarea>
            <input type="submit" id='Submit' />
        </form>
      </div>
    </div>
  )
}

export default Contact
