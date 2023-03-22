import { useSelector } from 'react-redux';

function Comic() {
  const selectedComic = useSelector((state) => state.comics.selectedComic);

  if (!selectedComic) {
    return null;
  }

  return (
    <div>
      <h2>{selectedComic.title}</h2>
      <img src={`${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`} alt={selectedComic.title} />
      <p>{selectedComic.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Comic;
