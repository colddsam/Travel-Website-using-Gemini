import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Details from '../pages/Details'
const Routers = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigate to="Details"/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/details/:name/:imgURL' element={<Details/>}></Route>
    </Routes>
  )
}

export default Routers