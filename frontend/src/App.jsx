import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Provider from './pages/Provider'
import Dashboard from './pages/Dashboard'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">  
      <nav className="p-4 bg-white shadow">  
        <div className="container mx-auto flex justify-between">  
          <Link to="/" className="font-bold">SkillBee</Link>  
          <div className="space-x-4">  
            <Link to="/dashboard">Dashboard</Link>  
          </div>  
        </div>  
      </nav>  
      <main className="container mx-auto p-4">  
        <Routes>  
          <Route path="/" element={<Home/>} />  
          <Route path="/provider/:id" element={<Provider/>} />  
          <Route path="/dashboard" element={<Dashboard/>} />  
        </Routes>  
      </main>  
    </div>
  )
}
