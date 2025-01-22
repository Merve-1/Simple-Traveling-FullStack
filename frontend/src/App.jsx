import { useState } from 'react'

import '../src/styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileDesignLogin from "./components/MobileDesignLogin";
import MobileDesignRegister from "./components/MobileDesignRegister";
import Home from "./Home"
function App() {

  const [count, setCount] = useState(0)

  return (
   <Router>
    <Routes>
      <Route path="/" element={<MobileDesignLogin/>}/>
      <Route path="/register" element={<MobileDesignRegister />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
   </Router>
  )
}

export default App
