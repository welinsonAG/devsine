import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";


import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";

import { Container, Background, Cover, Info } from "./styles";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";


export default function MoviesDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieSimilar, setMovieSimilar] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieCredits(id),
        getMovieSimilar(id),
        getMovieVideos(id),
      ])
        .then(([movie, credits, similar, videos]) => {
          setMovie(movie);
          setMovieCredits(credits);
          setMovieSimilar(similar);
          setMovieVideos(videos);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, [id]);
  if (!movie) return null;

  return (
    <>
     
      <Background $image={getImages(movie.backdrop_path)} />
      <Container>
        <Cover>
          <img src={getImages(movie.poster_path)} />
        </Cover>

        <Info>
          <h2>{movie.title}</h2>
          <SpanGenres genres={movie.genres} />
          <p>{movie.overview}</p>
          <Credits credits={movieCredits} />
         <button onClick={() => setShowModal(true)}>Assista Trailer</button>
        </Info>
       
      </Container>
      {showModal && <Modal videos={movieVideos} setShowModal={setShowModal} />}
       <Slider info={movieSimilar} title="Filmes Populares" route="filmes" />
    </>
  );
}
