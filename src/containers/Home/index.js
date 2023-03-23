import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { setComics, setSelectedComic } from '../../features/comicSlice';
import { useDispatch } from 'react-redux';
import {
  Container,
  ContainerCard,
  Overlay,
  StyledLink
} from './styles';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [ pageComics, setPageComics] = useState()
  const [selectedPageComic, setSelectedPageComic] = useState(null);
  const [ atualComic, setAtualComic] =useState()
  const dispatch = useDispatch();
  console.log(atualComic)
  useEffect(() => {
    async function getComics() {
      const { data } = await api.get('/comics');
      dispatch(setComics(data.data.results));
      setPageComics(data.data.results)
    }
    getComics();
  }, [dispatch]);

  // Seleciona uma HQ
  const handleSelectComic = (comic) => {
    
    setSelectedPageComic(comic);
    setAtualComic(comic)
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
          <ContainerCard key={comic.id} onClick={() => handleSelectComic(comic)}>
            <div className="thumbnail">
              
              <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt={comic.title} />
            </div>
            <div className="content">
              
              <h2>{comic.title}</h2>
              <h3>Price: ${comic.prices[0].price}</h3>
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
              <StyledLink class="neon-bt" href="#"  onClick={() => setSelectedPageComic(null)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              X
            </StyledLink>

              </div>

              <img src={selectedPageComic.thumbnail.path + '.' + selectedPageComic.thumbnail.extension} alt={selectedPageComic.title} />
              </div>

              <div className="text-content">

              <p>{selectedPageComic.description}</p>
              <p>ID#{selectedPageComic.id}</p>

              <h2>{selectedPageComic.title}</h2>

              
              <StyledLink add={true} onClick={() => handleAddComic(selectedPageComic)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Adicionar
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
