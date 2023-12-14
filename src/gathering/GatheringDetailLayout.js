import React from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header';
import GatheringDetail from './GatheringDetail';



const GatheringDetailLayout = () => {
  return (
   
    <div>
      <Header />
      <div >
        <GatheringDetail />
        <div >
          <Footer />
        </div>
      </div>
    </div>
   
  )
}

export default GatheringDetailLayout;
