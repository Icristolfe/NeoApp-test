import React from "react";

import { useCart } from "../../features/CartContext";

import { Header as TopHeader } from "../../components/Header";
import formatDolar from "../../utils/formatDolar";


import {
  Container,
  ContentItems,
  ContainerItems,
  CartContainer,
  Header,
  EmptyCart
} from './styles'

import CartResume from '../../components/CartResume'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";


function Cart() {


  const { cartProducts, increaseProduct, decreaseProduct } = useCart()

  console.log(cartProducts);

  return (
    <Container>
      <TopHeader />
      <ContentItems >

      <ContainerItems>

      <Header>
        <p>ID</p>
        <p>Items</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </Header>

     
        {
          cartProducts  && cartProducts.length > 0 ? (
            cartProducts.map(product => (

              <CartContainer key={product.id}>

                <p className={product.rare ? 'rare' : ''}>#{product.id}</p>

                <p className={product.rare ? 'rare' : ''}>
                  
                  {product.title?.slice(0, 30) + "..." }

                </p>


                <p className={product.rare ? 'rare' : ''}>{formatDolar(product.FinalPrice)}</p>

                  <div className="quantity-container">

                    <button onClick={() => decreaseProduct(product.id)}>
                      <FaMinusCircle />
                    </button>

                  <p className={product.rare ? 'rare' : ''}>{product.quantity}</p>
                  
                    <button onClick={() => increaseProduct(product.id)}>
                      <FaPlusCircle />
                    </button>

                  </div>

                  <p className={product.rare ? 'rare' : ''}>{formatDolar(product.FinalPrice * product.quantity)}</p>

              </CartContainer>
            ))
          ) : (<EmptyCart>Empty Cart</EmptyCart>)
          
        }
      </ContainerItems>
        
      <CartResume />

      </ContentItems>
    </Container>
  );
}

export default Cart;
