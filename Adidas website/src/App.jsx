import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Nav from './Components/Navigation/Nav'
import Hero from './Components/Hero/Hero'
import SectionOne from './Components/Main/SectionOne'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <SectionOne />
    </>
  )
}

export default App
