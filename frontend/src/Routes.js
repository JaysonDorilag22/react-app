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
          // <PrivateRoute redirectTo="/">
          //   <Create />
          // </PrivateRoute>
          <Create />
        }
        />
        {/* <Route path="/create" element={<Create/>}/> */}
        <Route path="/post/:id" exact="true" element={
          // <PrivateRoute redirectTo="/">
          //   <SinglePost />
          // </PrivateRoute>
          <SinglePost />
        } />

        <Route path="/post/edit/:id" exact="true" element={
          // <PrivateRoute redirectTo="/">
          //   <UpdatePost />
          // </PrivateRoute>
          <UpdatePost />
        } />

      </Routes>
    </Router>
  )
}

export default RoutedApp