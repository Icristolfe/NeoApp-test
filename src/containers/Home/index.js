import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { setComics, setSelectedComic } from '../../features/comicSlice';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

import StyledLink from '../../components/Button'

import {
  Container,
  ContainerCard,
  Overlay
} from './styles';

function Home() {
  const navigate = useNavigate();
  const [ pageComics, setPageComics] = useState()
  const [selectedPageComic, setSelectedPageComic] = useState(null);
  const dispatch = useDispatch();

  
  useEffect(() => {
    function formatDolar(number) {
      return number.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
    async function getComics() {
      const { data } = await api.get('/comics');
      
      // Adiciona a propriedade "rare" aleatoriamente a dois comics
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
          return { ...comic, rare: true, FinalPrice:  formatDolar( priceWithRandom) };
        } else {
          return { ...comic, FinalPrice: formatDolar( priceWithRandom) };
        }
      });

      
      // Atualiza o estado do componente com os resultados modificados
      dispatch(setComics(rareComics));
      setPageComics(rareComics);

    }
    
    getComics();
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


 

  return (
    <div>
      <Container>
     
        { pageComics &&
         pageComics.map(comic => (
          <ContainerCard key={comic.id} onClick={() => handleSelectComic(comic)} className={comic.rare ? 'rare-border' : ''} >
            <div className="thumbnail">
              
              <img
              src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt={comic.title}
              />

            </div>

            <div className="content">
              
              <h2>{comic.title}</h2>

              <h3>Price: {comic.FinalPrice}</h3>
            </div>
          </ContainerCard>
        ))}
        {selectedPageComic && (
          <Overlay>
            <motion.div 
              className="selected-comic"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >

                <div className="button-image">
                <div className="align-button">
              <StyledLink
                href="#"
                justify="center"
                onClick={() => setSelectedPageComic(null)}
                >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              x
            </StyledLink>

              </div>

              <img src={selectedPageComic.thumbnail.path + '.' + selectedPageComic.thumbnail.extension} alt={selectedPageComic.title} />
              </div>

              <div className="text-content">

              <p>ID#{selectedPageComic.id}</p>

              <h2>{selectedPageComic.title}</h2>

              <p>Price: {selectedPageComic.FinalPrice}</p>

              
              <StyledLink add={true}
              size="40px"
              width="100%"
              justify="center"
              onClick={() => handleAddComic(selectedPageComic)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Ver Mais
            </StyledLink>

            </div>
            </motion.div>
          </Overlay>
        )}
      </Container>
    </div>
  );
}

export default Home;
