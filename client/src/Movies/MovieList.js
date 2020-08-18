import React from 'react';
// import Link to link to specific movie
import { Link } from 'react-router-dom';

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        // adding the link to be taken into the movie clicked
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <Link to={'/movies/${movie.id}'}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </Link>
  );
}

export default MovieList;
