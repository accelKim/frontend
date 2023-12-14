import React from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header';
import MissionDetail from './MissionDetail';



const MssionDetailLayout = () => {
  return (
   
    <div>
      <Header />
      <div >
        <MissionDetail />
        <div >
          <Footer />
        </div>
      </div>
    </div>
   
  )
}

export default MssionDetailLayout;
