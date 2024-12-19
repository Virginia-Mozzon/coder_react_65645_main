import React, { useState, useEffect } from 'react';
import { getProducts } from '../../data/backend-falso';
import Button from '../Button/Button';

const GenreButtons = () => {
  const [genres, setGenres] = useState([]);
  let uniqueGenres = [];

  useEffect(() => {
    // Extraemos géneros únicos del JSON
    getProducts()
      .then(res => {
        uniqueGenres = [...new Set(res.map(book => book.genero))];
        setGenres(uniqueGenres)
      })
      .catch(e => console.error(e))
      .finally(
        console.log("Se proceso promesa sin filtro")
      )
  }, []); //Solo se renderiza la pagina a la primera vez.

  return (
    <div>       
        {genres.map( (genre, index) => {
            return (
                
                <Button text={genre} color={"green"} to={`/genre/${genre}`} id={index}/>
            )
        })}
    </div>
  );
};

export default GenreButtons;
