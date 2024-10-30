import React, { useEffect, useRef } from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Homepage_components/Hero'
import AboutMe from '../components/Homepage_components/AboutMe'
import WhatIDo from '../components/Homepage_components/WhatIDo'
import HireMe from '../components/Homepage_components/HireMe'
import MySkills from '../components/Homepage_components/MySkills'
import MyWork from '../components/Homepage_components/MyWork'
import ContactMe from '../components/Homepage_components/ContactMe'
import Footer from '../components/Homepage_components/Footer'

const HomePage = () => {
  // SETTING UP REFS
  const { sectionRefs, homeRef, aboutRef, WhatIDoRef, mySkillsRef, contactMeRef } = useOutletContext()
  const setRef = (index, ref) => (el) => {
    if (el) {
      sectionRefs.current[index] = el;
      if (index === 0) homeRef.current = el
      if (index === 1) aboutRef.current = el
      if (index === 2) WhatIDoRef.current = el
      if (index === 3) mySkillsRef.current = el
      if (index === 4) contactMeRef.current = el
    }
  }

  return (
    <>
      <section ref={setRef(0, homeRef)} id='home'>
        <Hero />
      </section>
      <section ref={setRef(1, aboutRef)} id='aboutMe'>
        <AboutMe />
      </section>
      <section ref={setRef(2, WhatIDoRef)} id='what_i_do'>
        <WhatIDo />
      </section>
      <HireMe />
      <section ref={setRef(3, mySkillsRef)} id='mySkills'>
        <MySkills />
      </section>
      <MyWork />
      <section ref={setRef(4, contactMeRef)} id='contactMe'>
        <ContactMe />
      </section>
      <Footer />
    </>
  )
}

export default HomePage