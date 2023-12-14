import React from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header';
import GatheringAdd from './GatheringAdd';



const GatheringAddLayout = () => {
  return (
   
    <div>
      <Header />
      <div >
        <GatheringAdd />
        <div >
          <Footer />
        </div>
      </div>
    </div>
   
  )
}

export default GatheringAddLayout;
