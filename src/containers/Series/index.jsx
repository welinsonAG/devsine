import { useEffect, useState } from "react";
import { getPopularSeries, getTopSeries } from "../../services/getData";

import { Container,Background } from "./styles";
import Slider from "../../components/Slider";

export default function Series() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [topSeries, setTopSeries] = useState([]);

  useEffect(() => {
    async function loadAll() {
      Promise.all([getPopularSeries(), getTopSeries()])
        .then(([popular, top]) => {
          setPopularSeries(popular);
          setTopSeries(top);
        })
        .catch((error) => console.error(error));
    }

    loadAll();
  }, []);

  return (
    <Container>
      <Slider info={popularSeries} title="Séries Populares" route="series" />
      <Slider
        info={topSeries}
        title="Séries Mais Bem Avaliadas"
        route="series"
      />
    </Container>
  );
}
