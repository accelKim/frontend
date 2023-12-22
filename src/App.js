
import React from 'react';


import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Layout from './component/Layout';
import MissionListLayout from './mission/MissionListLayout';
import MssionDetailLayout from './mission/MssionDetailLayout';
import GatheringDetailLayout from './gathering/GatheringDetailLayout';
import GatheringAddLayout from './gathering/GatheringAddLayout';
import GatheringListLayout from './gathering/GatheringListLayout';
import GatheringUpdateLayout from './gathering/GatheringUpdateLayout';
import ErrorPage from './errorpage/ErrorPage';
import DefaultLayout from './admin/layout/DefaultLayout';
import './admin/scss/style.scss';
import MyMission from './mypage/MyMission';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout></Layout>}></Route>
          <Route path='/mission' element={<MissionListLayout />} />
          <Route path='/mission/detail' element={<MssionDetailLayout />} />
          <Route path='/gathering' element={<GatheringListLayout />} />
          <Route path='/gathering/detail' element={<GatheringDetailLayout />} />
          <Route path='/gathering/update' element={<GatheringUpdateLayout />} />
          <Route path='/gathering/add' element={<GatheringAddLayout />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/admin/*' element={<DefaultLayout />} />
          <Route path='/mypage/mission' element={<MyMission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
