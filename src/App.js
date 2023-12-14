
import React from 'react';


import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Layout from './component/Layout';
import MissionListLayout from './mission/MissionListLayout';
import MssionDetailLayout from './mission/MssionDetailLayout';
import GatheringDetail from './gathering/GatheringDetail';
import GatheringAdd from './gathering/GatheringAdd';
import GatheringList from './gathering/GatheringList';
import GatheringUpdate from './gathering/GatheringUpdate';
import ErrorPage from './errorpage/ErrorPage';
import DefaultLayout from './admin/layout/DefaultLayout';
import './admin/scss/style.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout></Layout>}></Route>
          <Route path='/mission' element={<MissionListLayout />} />
          <Route path='/mission/detail' element={<MssionDetailLayout />} />
          <Route path='/gathering' element={<GatheringList />} />
          <Route path='/gathering/detail' element={<GatheringDetail />} />
          <Route path='/gathering/update' element={<GatheringUpdate />} />
          <Route path='/gathering/add' element={<GatheringAdd />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/admin/*' element={<DefaultLayout />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
