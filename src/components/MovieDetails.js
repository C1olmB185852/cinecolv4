import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Volver a la lista</button>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      {/* Aquí puedes agregar más detalles como el trailer */}
    </div>
  );
};

export default MovieDetails;
