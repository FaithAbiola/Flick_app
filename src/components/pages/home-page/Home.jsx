import React from 'react'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import Card from '../../card/Card'
import Content from '../../main/Content'
import SecondCard from '../../card-2/SecondCard'
import JoinFlick from '../../joinFlick/JoinFlick'


function Home() {
  return (
    <div className=''>
        <Header />
        <Card />
        <Content />
        <SecondCard />
        <JoinFlick />
        <Footer />
    </div>
  )
}

export default Home