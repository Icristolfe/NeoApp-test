import React from 'react'

import { useSelector } from 'react-redux';

function ComicPage() {
  const selectedComic = useSelector(state => state.selectedComic);

  if (!selectedComic) {
    return null; // Se não houver comic selecionado, não exiba nada
  }

  return (
    <div>
      <h2>{selectedComic.title}</h2>
      <img src={selectedComic.thumbnail.path + '.' + selectedComic.thumbnail.extension} alt={selectedComic.title} />
      <p>{selectedComic.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ComicPage;
