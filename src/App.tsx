import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import FlipCard from './components/FlipCard'
import NewCard from './components/NewCard'
import Card from './components/Card'

const App = () => {
  return (
      <BrowserRouter>
        <div className='fixed bottom-0 right-0 p-10 gap-4 flex flex-col'>
          <button className='bg-white rounded-xl px-5 py-10'><Link to={"/flipcard"}>Új gyakorlás indítása</Link></button>
          <button className='bg-white rounded-xl px-5 py-10'><Link to={"/newcard"}>Új kártyák hozzáadása</Link></button>
        </div>
        <Routes>
          <Route index element={<FlipCard/>} />
          <Route path='/flipcard' element={<FlipCard/>} />
          <Route path="/newcard" element={<NewCard/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App