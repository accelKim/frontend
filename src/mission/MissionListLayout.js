import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import MissionList from './MissionList'



const MissionListLayout = () => {
  return (
   
    <div>
      <Header />
      <div >
        <MissionList />
        <div >
          <Footer />
        </div>
      </div>
    </div>
   
  )
}

export default MissionListLayout;
