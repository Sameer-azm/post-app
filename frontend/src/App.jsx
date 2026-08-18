import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Createpost from './pages/Createpost.jsx'
import Feed from './pages/Feed.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Createpost" element={<Createpost/>} />
        <Route path="/Feed" element={<Feed/>} />
    </Routes>
   </Router>
  )
}

export default App