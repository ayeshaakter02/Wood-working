import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Work from '../components/Work'
import Happy from '../components/Happy'
import Exhibition from '../components/Exhibition'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
      <Banner/>
      <About/>
      <Work/>
      <Happy/>
      <Exhibition/>
      <Footer/>
    </div>
  )
}

export default Home