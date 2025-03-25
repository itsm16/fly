import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import Login from './pages/Login'
import Test from './components/Test'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Layout />}>
          <Route path='/test' element={<Test/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App