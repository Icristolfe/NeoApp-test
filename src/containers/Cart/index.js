import React from "react";

import { useCart } from "../../features/CartContext";

import { Header as TopHeader } from "../../components/Header";
import formatDolar from "../../utils/formatDolar";


import { Container, ContainerItems, CartContainer, Header, EmptyCart } from './styles'


function Cart() {

  const { cartProducts, increaseProduct, decreaseProduct } = useCart()

  return (
    <Container>
      <TopHeader />
      <ContainerItems>

      <Header>
        <p>ID</p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

     
        {
          cartProducts  && cartProducts.length > 0 ? (
            cartProducts.map(product => (
              <CartContainer key={product.id}>
                <p>#{product.id}</p>
                <p>{product.title.slice(0, 30) + "..." }</p>

                <p>{formatDolar(product.FinalPrice)}</p>

                  <div className="quantity-container">                
                    <button  onClick={() => decreaseProduct(product.id)}>-</button>
                  <p>{product.quantity}</p>
                    <button onClick={() => increaseProduct(product.id)}>+</button>
                  </div>

                  <p>{formatDolar(product.FinalPrice * product.quantity)}</p>

              </CartContainer>
            ))
          ) : (<EmptyCart>Carrinho Vazio</EmptyCart>)
          
        }
      </ContainerItems>
    </Container>
  );
}

export default Cart;
