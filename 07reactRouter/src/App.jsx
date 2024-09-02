// import { useState } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {

  return (
    <>
    {/* due to react-router-dom this wont render so we have defined routes in main.jsx */}
  <Header/>
  <Home/>
  <Footer/>
    </>
  )
}

export default App
