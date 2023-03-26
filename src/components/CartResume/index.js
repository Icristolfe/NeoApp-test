import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../features/CartContext'
import formatDolar from '../../utils/formatDolar'
import Button from '../Button'
import { Container } from './styles'

function CartResume() {

  const [finalPrice, setFinalPrice] = useState(0)

  const [deliveryTax, setDeliveryTax] = useState(10)

  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, currency) => {
      return currency.FinalPrice * currency.quantity + acc
    }, 0)
    setDeliveryTax(10)
    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    // limpa o carrinho
    localStorage.clear()

    await toast.success('Request made successfully')
  }

  return (
    <Container>
      <div className="container, container">

        <h2 className="title">Order Summary</h2>

        <div className="items-price">
        
          <p className="items">Items</p>

          <p className="items"> {formatDolar(finalPrice)}</p>

        </div>

        <div className="delivery-price">
        
          <p className="delivery-tax" >Delivery</p>

          <p className="delivery-tax"  >{formatDolar(deliveryTax)}</p>

          </div>


      </div>

      <div className="container-bottom , container">
        <p>Total</p>
        <p>{formatDolar(finalPrice + deliveryTax)}</p>
      </div>

      <Button
        onClick={submitOrder}
        style={{ width: '100%', marginTop: 30, height: 48 }}
        justify="center"
      >
        Checkout
      </Button>
    </Container>
  )
}

export default CartResume
