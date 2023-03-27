import React from 'react'
import StyledLink from './index'

describe('<StyledLink />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StyledLink />)
  })
})