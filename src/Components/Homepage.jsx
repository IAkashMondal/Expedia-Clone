import { Stat } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import MidHome from './MidHome'
import Navbar from './Navbar'
import Stats from './Stat'
import Testi from './Testi'
import TwoImage from './Twoimage'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <MidHome/>
      <Stats/>
      <Testi/>
      <TwoImage/>
      <Footer/>
    </>
  )
}

export default Homepage
