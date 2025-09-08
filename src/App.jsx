import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link } from "react-router-dom";
import SplashPage from './pages/RandingPage/RandingPage.SplashPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
    </>
  )
}

export default App
