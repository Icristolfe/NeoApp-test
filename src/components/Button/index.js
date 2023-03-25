import PropTypes from 'prop-types'
import React from 'react'

import { ButtonLink } from './styles.js'

function StyledLink({ children, ...rest }) {
  return <ButtonLink {...rest}>{children}</ButtonLink>
}

StyledLink.propTypes = {
  children: PropTypes.any
}

export  default StyledLink