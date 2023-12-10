
import React from 'react';

import Home from './home/home'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Layout from './component/Layout';
import MissionList from './mission/MissionList';
import MissionDetail from './mission/MissionDetail';
import GatheringDetail from './gathering/GatheringDetail';
import GatheringAdd from './gathering/GatheringAdd';
import GatheringList from './gathering/GatheringList';
import GatheringUpdate from './gathering/GatheringUpdate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout></Layout>}></Route>
          <Route path='/mission' element={<MissionList />} />
          <Route path='/mission/detail' element={<MissionDetail />} />
          <Route path='/gathering' element={<GatheringList />} />
          <Route path='/gathering/detail' element={<GatheringDetail />} />
          <Route path='/gathering/update' element={<GatheringUpdate />} />
          <Route path='/gathering/add' element={<GatheringAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
