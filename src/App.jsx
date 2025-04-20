import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InitialPage from './react/pages/InitialPage';
import DesignSystem from './react/pages/DesignSystem';
import AnimationPage from './react/pages/AnimationPage';
import HomeScreen from './react/pages/HomeScreen';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='/design-system' element={<DesignSystem />} />
        <Route path='/animation' element={<AnimationPage />} />
        <Route path='/homescreen' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
