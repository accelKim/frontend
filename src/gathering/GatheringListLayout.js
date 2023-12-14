import React from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header';
import GatheringList from './GatheringList';



const GatheringListLayout = () => {
  return (
   
    <div>
      <Header />
      <div >
        <GatheringList />
        <div >
          <Footer />
        </div>
      </div>
    </div>
   
  )
}

export default GatheringListLayout;
