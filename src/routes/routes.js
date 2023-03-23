import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import ComicPage from '../containers/ComicPage'
import PrivateRoute from './private-route'


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />

       <Route
          path={"/comic"}
          element={
            <PrivateRoute>
              <ComicPage />
            </PrivateRoute>
          }
          />
          </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
