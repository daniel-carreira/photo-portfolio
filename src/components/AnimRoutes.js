import React from 'react';

import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'

import { Routes, Route, useLocation  } from 'react-router-dom';

const AnimRoutes = () => {
  return (<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/portfolio' element={<Portfolio />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
  );
};

export default AnimRoutes;
