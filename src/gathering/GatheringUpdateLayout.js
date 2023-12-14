import React from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header';
import GatheringUpdate from './GatheringUpdate';



const GatheringUpdateLayout = () => {
  return (
   
    <div>
      <Header />
      <div >
        <GatheringUpdate />
        <div >
          <Footer />
        </div>
      </div>
    </div>
   
  )
}

export default GatheringUpdateLayout;
