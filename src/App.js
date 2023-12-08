
import React from 'react';

import Home from './home/home'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Layout from './component/Layout';
import MissionList from './mission/MissionList';
import MissionDetail from './mission/MissionDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout></Layout>}></Route>
          <Route path='/mission' element={<MissionList />} />
          <Route path='/mission/detail' element={<MissionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
