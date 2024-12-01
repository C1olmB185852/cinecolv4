import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div>
      <h2>Películas Populares</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => onSelectMovie(movie)}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
