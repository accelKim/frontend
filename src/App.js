
import React from 'react';

import Home from './home/home'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Layout from './component/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout></Layout>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
