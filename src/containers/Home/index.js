import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { setComics, setSelectedComic } from '../../features/comicSlice';
import { useDispatch } from 'react-redux';
import { Container, ContainerCard, Overlay } from './styles';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [ pageComics, setPageComics] = useState()
  const [selectedPageComic, setSelectedPageComic] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getComics() {
      const { data } = await api.get('/comics');
      dispatch(setComics(data.data.results));
      setPageComics(data.data.results)
    }
    getComics();
  }, [dispatch]);

  // Seleciona um comic
  const handleSelectComic = (comic) => {
    dispatch(setSelectedComic(comic)); 
    setSelectedPageComic(comic);
  };

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
              <button>Add to Cart</button>
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
              <button onClick={() => setSelectedPageComic(null)}>Fechar</button>
              <h2>{selectedPageComic.title}</h2>
              <img src={selectedPageComic.thumbnail.path + '.' + selectedPageComic.thumbnail.extension} alt={selectedPageComic.title} />
              <p>{selectedPageComic.description}</p>
              <button onClick={() => navigate('/comic')}>Ver Mais</button>
            </motion.div>
          </Overlay>
        )}
      </Container>
    </div>
  );
}

export default Home;
