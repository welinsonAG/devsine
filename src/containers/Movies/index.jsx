
import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import { getMovies, getTopMovies } from "../../services/getData";

export default function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const [popular, top] = await Promise.all([
        getMovies(),
        getTopMovies()
      ]);

      setPopularMovies(popular);
      setTopMovies(top);
    }

    loadMovies();
  }, []);

  return (
    <>
      <Slider
        info={popularMovies}
        title="Filmes Populares"
        route="filmes"
      />

      <Slider
        info={topMovies}
        title="Filmes Mais Avaliados"
        route="filmes"
      />
    </>
  );
}
