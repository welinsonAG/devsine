import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import  Slider  from "../../components/Slider"
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";

import { Container, Background, Cover, Info, ContainerMovies } from "./styles.js";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres/index.jsx";
import {Container as Credits } from "../../components/Credits/styles.js";

export default function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieCredits(id),
        getMovieSimilar(id),
        getMovieVideos(id),
      ])
        .then(([movie, credits, similar, videos]) => {
         ;
          setMovie(movie);
          setMovieCredits(credits);
          setMovieSimilar(similar);
          setMovieVideos(videos);
        })
        
    }

    getAllData();
  }, []);

  if (!movie) return null;
  return (
    <>
      {movie && (
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

              <Credits>
                <h3>Crédits</h3>

                {movieCredits &&
                  movieCredits.slice(0, 5).map((actor) => (
                    <div key={actor.id}>
                      <img
                        src={getImages(actor.profile_path)}
                        alt={actor.name}
                      />
                      <span>{actor.name}</span>
                    </div>
                  ))}
              </Credits>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos && movieVideos.map(( video) => ( 
             <div key={video.id}>
              <h4>{video.name}</h4>
                <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        title="Youtube Video Player"
        height="500px"
        width="100%"
      ></iframe>
             </div>
            ))}
          </ContainerMovies>
             {movieSimilar &&  <Slider info={movieSimilar} title={"Filmes Similares"} />}
        </>
      )}
    </>
  );
}
