import React from 'react'
// import Header from './Components/Header'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Accountheader from './Components/Accountheader'
import Habit from './Components/Habit'
import AddhabitModule from './Components/AddhabitModule'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/account" element={<Accountheader />} />
        <Route path="/habit" element={<Habit />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addhabit" element={<AddhabitModule />} />
      </Routes>
    </>
  )
}

export default App
