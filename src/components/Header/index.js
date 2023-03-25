import React from 'react'
import { useNavigate } from 'react-router-dom'
import StyledLink from '../Button'
import { FaShoppingCart, FaHome } from 'react-icons/fa';

import { Container } from './styles'

export function Header() {
  const navigate = useNavigate()


  return (
    <Container>

        <StyledLink
              size="40px"
              width="40%"
              justify="center"
              href="#"
              onClick={() => navigate('/')}
              >
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Home < FaHome />
                </>
            </StyledLink>

            <StyledLink
              size="40px"
              width="40%"
              justify="center"
              href="#"
              onClick={() => navigate('/carrinho')}
              >
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Carrinho < FaShoppingCart />
                </>

            </StyledLink>
          

       
    </Container>
  )
}
