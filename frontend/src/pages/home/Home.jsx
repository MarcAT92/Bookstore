import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import Reviews from './Reviews'

const Home = () => {
  return (
    <>
        <Banner />
        <TopSellers />
        <Recommended />
        <Reviews />
    </>
  )
}

export default Home