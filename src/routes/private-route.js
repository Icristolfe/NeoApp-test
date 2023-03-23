import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

function PrivateRoute({ children, ...rest }) {


  const selected = useSelector(state => state.comics.selectedComic);
  console.log(selected)
  
  if (!selected) {
    return <Navigate replace to="/" />
  }
  return children
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
}
