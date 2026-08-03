import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Nav from './Components/Navigation/Nav'
import Hero from './Components/Hero/Hero'
import SectionOne from './Components/Main/SectionOne'
import SectionTwo from './Components/Main/SectionTwo'
import SectionThree from './Components/Main/SectionThree'
import SectionFour from './Components/Main/SectionFour'
import SectionFive from './Components/Main/SectionFive'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  )
}

export default App
