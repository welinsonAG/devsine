import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../../components/Button/index.jsx";
import { ContainerButtons } from "../../components/Button/styles.js";
import Slider from "../../components/Slider/index.jsx";
import Modal from "../../components/Modal/index.jsx";

import { getImages } from "../../utils/getImages.js";
import {
  getMovies,
  getTopMovies,
  getTopSeries,
  getPopularSeries,
  getTopPeople,
  getMovieVideos,
} from "../../services/getData";

import { Background, Container, Info, Poster } from "./styles.js";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState(null);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topPeople, setTopPeople] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  async function getAllData() {
    try {
      const [
        movies,
        topMovies,
        topSeries,
        popularSeriesData,
        topPeopleData,
      ] = await Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ]);

      const mainMovie = movies[0]; // sempre define filme principal
      setMovie(mainMovie);

      const videosResponse = await getMovieVideos(mainMovie.id);
      setMovieVideos(videosResponse.results || []);

      setTopMovies(topMovies);
      setTopSeries(topSeries);
      setPopularSeries(popularSeriesData);
      setTopPeople(topPeopleData);

    } catch (error) {
      console.error(error);
    }
  }

  getAllData();
}, []);


  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal videos={movieVideos} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assistir Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>

            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Séries Populares"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Top Pessoas Populares"} />}
    </>
  );
}
