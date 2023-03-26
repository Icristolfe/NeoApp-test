import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../features/CartContext'
import formatDolar from '../../utils/formatDolar'
import Button from '../Button'
import { Container } from './styles'

function CartResume() {

  const navigate = useNavigate()
  const [finalPrice, setFinalPrice] = useState(0)


  const [deliveryTax, setDeliveryTax] = useState(10)
  const [discountRare, setDiscountRare] = useState(false)


  const [discountComum, setDiscountComum] = useState(false)

  const { cartProducts, updateCart } = useCart()

  const [ input, setInput ] = useState("")

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, currency) => {
      return currency.FinalPrice * currency.quantity + acc
    }, 0)
    setDeliveryTax(10)
    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    // limpa o carrinho
    const comic = localStorage.getItem('cart')

    if(comic){
      await toast.success('Request made successfully')

      setTimeout(() => {
        navigate("/")
        
      }, 2000);

      localStorage.removeItem('cart');

    } 
    else {
      return await toast.error('Empty Cart')
    }

   
  }
  function handleDiscount(e) {
    const RareComic = 'RARE'
    const ComumComic = 'COMUM'
    
  
    if (e === "Enter") {
      const newCartProducts = cartProducts.map(item => {

        if (input === RareComic && item.rare && !discountRare) {
          setDiscountRare(true)

          return { ...item, FinalPrice: item.FinalPrice * 0.25 }

        }
        else if (input === ComumComic && !item.rare && !discountComum) {
          setDiscountComum(true)

          return { ...item, FinalPrice: item.FinalPrice * 0.95 }
        }
        else {
          return item
        }
        
      })
      
      updateCart(newCartProducts)
      
    } 

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

          <div className="cupons">

          <input
            type="text"
            value={input}
            onKeyUp={(e) => { handleDiscount(e.code) }}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite Seu Cupom"
/>


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
