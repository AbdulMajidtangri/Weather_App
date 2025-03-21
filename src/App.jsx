import React from 'react'
import Weather_info from './Components/Weather_info'
import Create_api from './Context/Create_api'
const App = () => {
  return (
    <div>
<Create_api>
  <Weather_info />
</Create_api>
    </div>
  )
}

export default App
