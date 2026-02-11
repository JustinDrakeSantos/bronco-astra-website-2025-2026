import {  Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
import Team from './team.jsx'
import Drone from './drone.jsx'
import Timeline from './timeline.jsx'
import Testing from './testing.jsx'
import Tips from './tips.jsx'
import Navbar from '../components/navbar.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/drone' element={<Drone/>}/>
          <Route path='/timeline' element={<Timeline/>}/>
          <Route path='/testing' element={<Testing/>}/>
          <Route path='/tips' element={<Tips/>}/>
      </Routes>
    </>
    
  )
}

export default App
