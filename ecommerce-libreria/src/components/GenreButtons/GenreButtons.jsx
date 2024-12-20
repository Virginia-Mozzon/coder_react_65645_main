import Button from '../Button/Button';

const GenreButtons = () => {

  const uniqueGenres = ["Romance", "Ficción", "Terror"];

  return (
    <div>       
        {uniqueGenres.map( (genre, index) => {
            return ( 
                <Button className='nav-item' text={genre} to={`/genre/${genre}`} key={index}/>
            )
        })}
    </div>
  );
};

export default GenreButtons;
