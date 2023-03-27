import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { setComics, setSelectedComic } from '../../features/ComicSlice';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import formatDolar from "../../utils/formatDolar";
import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from "../../features/CartContext";

import StyledLink from '../../components/Button'

import {
  Container,
  ContainerCard,
  Overlay,
  ContainerItems,
  OverlayTop,
  OverlayBottom
} from './styles';

import { Header } from "../../components/Header";

function Home() {



  const navigate = useNavigate();
  const [ pageComics, setPageComics] = useState(null)
  const [selectedPageComic, setSelectedPageComic] = useState(null);
  const dispatch = useDispatch();
  const { putProductInCart } = useCart();

  useEffect(() => {
    
    const comicsData = localStorage.getItem("comicsData");

    if (comicsData) {

      setPageComics(JSON.parse(comicsData));

    } else {

      api.get("/comics").then(({ data }) => {
        const rareIndices = [];
    
        while (rareIndices.length < 2) {
          const index = Math.floor(Math.random() * data.data.results.length);
          if (!rareIndices.includes(index)) {
            rareIndices.push(index);
          }
          
        }
  
        const rareComics = data.data.results.map((comic, index) => {
          const priceWithRandom = comic.prices[0].price + Math.floor(Math.random() * 91) + 10; // número aleatório entre 10 e 100
  
          if (rareIndices.includes(index)) {
  
            return { ...comic, rare: true, FinalPrice: priceWithRandom };
          } else {
            return { ...comic, FinalPrice: priceWithRandom };
          }
        });
  
        
        // Atualiza o estado do componente com os resultados modificados
        dispatch(setComics(rareComics));
        
        setPageComics(rareComics);
        localStorage.setItem("comicsData", JSON.stringify(rareComics));
        setPageComics(rareComics);
      });
    }
  }, [dispatch]);


  // Seleciona uma HQ
  const handleSelectComic = (comic) => {
    
    setSelectedPageComic(comic);
  };
//Adiciona a HQ ao redux
  const handleAddComic = (comic) => {
    dispatch(setSelectedComic(comic)); 
    navigate('/comic')
  }


  const handleAddToCart = (e, comic) => {
    e.preventDefault();
    const product = { ...comic, quantity: 0 };

    putProductInCart(product);

    
  };
   

  return (
    <div>
      <Container>
        
          <Header />

        <ContainerItems >
                { pageComics&&
                pageComics.map(comic => (

                  <ContainerCard key={comic.id}
                  className={comic.rare ? 'rare-border' : ''}
                  rare={comic.rare}
                  >
          
                  <div className="thumbnail">
              
                  <img 
                  onClick={() => handleSelectComic(comic)}
                  src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt={comic.title}
                  />
          
                </div>
          
                <div className="content">
              
                <h2>{comic.title}</h2>
          
                <h3>Price: {formatDolar(comic.FinalPrice)}</h3>
                 <StyledLink
              rare={comic.rare}
              size="40px"
              width="40%"
              justify="center"
              href="#" 
              onClick={ (e) => handleAddToCart(e,comic)}>
                <>
                  <FaShoppingCart />
                </>
            </StyledLink>
                </div>

          
                </ContainerCard>
                ))
        }

          </ContainerItems>
        {selectedPageComic && (
          <Overlay>
            <motion.div 
              className="selected-comic"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >

            <OverlayTop>

                <div className="button-image">

                <div className="align-button">
              <StyledLink
                href="#"
                width="50%"
                size="40px"
                justify="center"
                onClick={() => setSelectedPageComic(null)}
                >
                  x
            </StyledLink>

              </div>

              <img src={selectedPageComic.thumbnail.path + '.' + selectedPageComic.thumbnail.extension} alt={selectedPageComic.title} />
              </div>

              </OverlayTop>
              
              <OverlayBottom>

              <div className="text-content">

              <p>ID#{selectedPageComic.id}</p>

              <h2>{selectedPageComic.title}</h2>

              <p>Price: {formatDolar(selectedPageComic.FinalPrice)}</p>

              
              <StyledLink add={true}
              size="40px"
              width="300px"
              justify="center"
              onClick={() => handleAddComic(selectedPageComic)}>
                View More
            </StyledLink>
              
            </div>

            </OverlayBottom>

            </motion.div>

          </Overlay>
        )}


      </Container>
    </div>
  );
}

export default Home;
