import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedComic } from "../../features/comicSlice";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { addToCart } from '../../features/cartSlice';


import { Container, ContainerItems } from './styles'

import StyledLink from '../../components/Button'

function ComicPage() {
  const selected = useSelector(state => state.comics.selectedComic);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cart = useSelector(state => state.cart);



  const handleAddToCart = () => {
    if (!cart) {
      return;
    }
    
    const existingItem = cart.find(item => item.id === selected.id);
  
    // se o comic já existe, aumenta a quantidade em 1
    if (existingItem) {
      dispatch(addToCart({ id: selected.id, quantity: existingItem.quantity + 1 }));
  
    // se o comic não existe, adiciona-o ao carrinho com quantidade 1
    } else {
      dispatch(addToCart({ ...selected, quantity: 1 }));
    }

    
  };
  
  
  useEffect(() => {
    if (!selected) {
      navigate("/");
    }
  }, [navigate, selected]);
  

  return (
    <Container>
      {selected && (
        <ContainerItems>
          <div className="align-title">
                <h1>{selected.title}</h1>
          </div>

          <img
            className={selected.rare ? 'rare-border' : ''} 
            src={selected.thumbnail.path + "." + selected.thumbnail.extension}
            alt={selected.title}
          />

          <div className="align-desc">
                <p>{selected.description.slice(0, 250) + "..."}</p>

                <h2>Price: ${selected.prices[0].price}</h2>
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
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FaArrowLeft />
                </>
            </StyledLink>

            <StyledLink
              start="true"
              size="40px"
              width="40%"
              justify="center"
              href="#" 
              onClick={handleAddToCart()}>
                <>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FaShoppingCart />
                </>
            </StyledLink>

          </div>

        </ContainerItems>
      )}
    </Container>
  );
}

export default ComicPage;
