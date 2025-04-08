import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Weather_info from './Components/Weather_info'
import Create_api from './Context/Create_api'

const App = () => {
  return (
    <Router>
      <Create_api>
        <Routes>
          <Route path="/" element={<Weather_info />} />
          {/* You can add more routes below */}
        </Routes>
      </Create_api>
    </Router>
  )
}

export default App
