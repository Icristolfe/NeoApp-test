import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedComic } from "../../features/ComicSlice";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import formatDolar from "../../utils/formatDolar";

import {
  Container,
  ContainerItems,
  ContainerContent,
  ContainerBotom
} from './styles'

import StyledLink from '../../components/Button'
import { Header } from "../../components/Header";

import { useCart } from "../../features/CartContext";

function ComicPage() {
  const selected = useSelector(state => state.comics.selectedComic);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { putProductInCart } = useCart();

  const handleAddToCart = () => {
   
    const product = { ...selected, quantity: 0 };
    putProductInCart(product);
  };
  
  
  useEffect(() => {
    if (!selected) {
      navigate("/");
    }
    const cartData = localStorage.getItem('cart');
    try {
      if (cartData) {
       
      }
    } catch (error) {
      console.log("Erro ao fazer o parsing do JSON: ", error);
    }
  }, [navigate, selected]);

  
  
  return (
    <Container>
      <Header />
      {selected && (
        <ContainerItems>

          <ContainerContent>

          <div className="align-title">
            <h1>{selected.title}</h1>
          </div>

          <img
            className={selected.rare ? 'rare-border' : ''} 
            src={selected.thumbnail.path + "." + selected.thumbnail.extension}
            alt={selected.title}
          />

          </ContainerContent>

          <ContainerBotom>

          <div className="align-desc">
            {selected.rare ? (<p className={selected.rare ? 'rare-border' : ''}>Rare Comic</p>) : (<p></p>)}

            {selected.description ? ( <p>{ selected.description.slice(0, 250) + "..." }</p> ) : (<p>no description available</p>) }

            <h2>Price: {formatDolar(selected.FinalPrice)}</h2>
          </div>

          <div className="button-container">

            <StyledLink
              size="40px"
              width="40%"
              justify="center"
              href="#" 
              onClick={() => { 
                dispatch(setSelectedComic(null)); 
                navigate('/');
              }}>
                <>
                  <FaArrowLeft />
                </>
            </StyledLink>

            <StyledLink
              start="true"
              size="40px"
              width="40%"
              justify="center"
              href="#" 
              onClick={handleAddToCart}>
                <>
                  <FaShoppingCart />
                </>
            </StyledLink>

          </div>
          </ContainerBotom>

        </ContainerItems>
      )}
    </Container>
  );
}

export default ComicPage;
