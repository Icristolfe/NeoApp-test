import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import ComicPage from '../containers/ComicPage'


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>

      <Routes>
        <Route path={"/comic"} element={<ComicPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
