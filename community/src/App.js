import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CommunityHome from './comp/CommunityHome';
import CheerArtist from './comp/CheerArtist';
import SelectMember from './comp/selectMember';
import Vote from './comp/Vote';
import FandomTalk from './comp/FandomTalk';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/CommunityHome" element={<CommunityHome />} />
      <Route path='/Vote' element={<Vote />} />
      <Route path="/CheerArtist" element={<CheerArtist />} />
      <Route path="/selectMember" element={<SelectMember />} />
      <Route path="/FandomTalk" element={<FandomTalk />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
