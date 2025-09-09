import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link } from "react-router-dom";
import SplashPage from './pages/RandingPage/RandingPage.SplashPage';
import SelectMemberPage from './pages/RandingPage/RandingPage.SelectMemberPage';
import LightStickCustomPage from "./pages/light_stick/light_stick.CustomPage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/selectMember" element={<SelectMemberPage />} />
        <Route path="/light_stick" element={<LightStickCustomPage />} />
      </Routes>
    </>
  )
}

export default App
