import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedComic } from "../../features/comicSlice";
import { useNavigate } from "react-router-dom";

function ComicPage() {
  const selected = useSelector(state => state.comics.selectedComic);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Adicione aqui a lógica para adicionar o comic ao carrinho
  };

  useEffect(() => {
    if (!selected) {
      navigate("/");
      return null;
    }
  }, [navigate, selected]);

  return (
    <div>
      {selected && (
        <>
          <h1>{selected.title}</h1>
          <img
            src={selected.thumbnail.path + "." + selected.thumbnail.extension}
            alt={selected.title}
          />
          <p>{selected.description}</p>
          <h2>Price: ${selected.prices[0].price}</h2>
          <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
          <button onClick={() => dispatch(setSelectedComic(null))}>Back to Home</button>
        </>
      )}
    </div>
  );
}

export default ComicPage;
