import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Routers from './router/Router'

const App = () => {
  return (
    <>
      <Header />
      <Routers/>
      <Footer/>
    </>
  )
}

export default App