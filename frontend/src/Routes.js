import React from 'react'
import App from './App'
import Create from './Create'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const RoutedApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/create" element={<Create/>}/>
        </Routes>
    </Router>
  )
}

export default RoutedApp