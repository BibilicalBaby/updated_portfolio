import React, { useEffect, useRef }  from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const MainLayout = ({activeSection, setActiveSection}) => {
  const sectionRefs = useRef([])
  // INTERSECTION OBSERVER FOR  NAV LINKS WHILE SCROLLING
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.75 }
    )
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })
    return () => { observer.disconnect() }
  }, [setActiveSection])
  
  //  SETTINGUP ALL REFS
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const WhatIDoRef = useRef(null)
  const mySkillsRef = useRef(null)
  const contactMeRef = useRef(null)

  // SETTING UP THE HANDLE SCROLL FUNCTION
  const handleScroll = (e) => {
     e.preventDefault()
     const targetId = e.currentTarget.getAttribute('href').substring(1)
     let targetElement = {
      home: homeRef.current,
      aboutMe: aboutRef.current,
      what_i_do: WhatIDoRef.current,
      mySkills: mySkillsRef.current,
      contactMe: contactMeRef.current
     }[targetId]
     if(targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
 
  }
  
  return (
      <>
        <NavBar activeSection={activeSection} handleScroll={handleScroll}/>
        <Outlet context={{ sectionRefs, homeRef, aboutRef, WhatIDoRef, mySkillsRef, contactMeRef }}/>
      </>
  )
}

export default MainLayout