import React from 'react'
import App from './App'
import Create from './Create'
import SinglePost from './components/SinglePost'
import UpdatePost from './UpdatePost'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const RoutedApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" exact="true" element={
          <PrivateRoute redirectTo="/">
            <Create />
          </PrivateRoute>
        }
        />
        {/* <Route path="/create" element={<Create/>}/> */}
        <Route path="/posts/:id" exact="true" element={
          <PrivateRoute redirectTo="/">
            <SinglePost />
          </PrivateRoute>
        } />

        <Route path="/posts/edit/:id" exact="true" element={
          <PrivateRoute redirectTo="/">
            <UpdatePost />
          </PrivateRoute>
        } />

      </Routes>
    </Router>
  )
}

export default RoutedApp