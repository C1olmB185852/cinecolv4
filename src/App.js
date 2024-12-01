import React, { useState, useEffect } from "react";
import "./App.css"; // Estilos globales
import MovieList from "./components/MovieList"; // Componente para la lista de películas
import MovieDetails from "./components/MovieDetails"; // Componente para detalles de una película
import tmdbApi from "./services/tmdbApi"; // Servicio para interactuar con la API de TMDb

function App() {
  // Estado para almacenar las películas populares
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Película seleccionada para detalles

  useEffect(() => {
    // Llamada a la API para obtener las películas populares
    const fetchMovies = async () => {
      try {
        const response = await tmdbApi.get("/movie/popular", { params: { page: 1 } });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error al obtener películas populares:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie); // Establece la película seleccionada
  };

  const handleBackToList = () => {
    setSelectedMovie(null); // Vuelve a la lista de películas
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido a la aplicación de Películas!</h1>
      </header>

      <main>
        {/* Si se ha seleccionado una película, mostramos los detalles, de lo contrario mostramos la lista */}
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={handleBackToList} />
        ) : (
          <MovieList movies={movies} onSelectMovie={handleMovieSelect} />
        )}
      </main>
    </div>
  );
}

export default App;
