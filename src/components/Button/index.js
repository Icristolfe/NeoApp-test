import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { Container, ContainerCard, Overlay } from './styles';
import { motion } from 'framer-motion';

function ComicCards() {
  const comics = useSelector(state => state.comics);
  const dispatch = useDispatch();

  const [selectedComic, setSelectedComic] = useState(null);

  const handleSelectComic = (comic) => {
    setSelectedComic(comic);
  }

  const handleAddToCart = () => {
    dispatch(addToCart(selectedComic));
  }

  return (
    
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
          <button onClick={handleAddToCart}>Add to Cart</button>
        </motion.div>
        </Overlay>
      )}
    </Container>
  );
}

export default ComicCards;
