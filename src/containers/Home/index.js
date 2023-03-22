import React, {useState, useEffect } from "react";
import api from "../../services/api";
import { setComics } from '../../features/comicSlice';
import ComicCards from '../../components/Card'
import { useSelector, useDispatch } from 'react-redux';
import { Container, ContainerCard, Overlay } from './styles';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";



function Home() {

  const navigate = useNavigate()

  const comics = useSelector(state => state.comics);

  const [selectedComic, setSelectedComic] = useState(null);

  const dispatch = useDispatch();

  useEffect(() =>{
    async function getComics() {
      const { data } = await api.get('/comics')
      dispatch(setComics(data.data.results))
    }

    getComics()
  }, [dispatch])

  const handleSelectComic = (comic) => {
    dispatch(setSelectedComic(comic)); 
    setSelectedComic(null); 
    navigate('/comic'); 
  }
  

  return (
    <div>

      <Container>

     
{comics.map(comic => (
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
{selectedComic && (
  <Overlay>
     
  <motion.div 
    className="selected-comic"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5 }}
  >
    <button onClick={() => setSelectedComic(null)}>Fechar</button>
    <h2>{selectedComic.title}</h2>
    <img src={selectedComic.thumbnail.path + '.' + selectedComic.thumbnail.extension} alt={selectedComic.title} />
    <p>{selectedComic.description}</p>
    <button>Add to Cart</button>
  </motion.div>
  </Overlay>
)}
</Container>
    
    </div>
  );
}

export default Home;
