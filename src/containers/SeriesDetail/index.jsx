import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";


import {
  getSerieById,
  getSerieCredits,
  getSerieSimilar,
  getSerieVideos,
} from "../../services/getData";

import { Container, Background, Cover, Info } from "../SeriesDetail/styles";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";


export default function SeriesDetail() {
  const { id } = useParams();

  const [serie, setSerie] = useState(null);
  const [serieCredits, setSerieCredits] = useState([]);
  const [serieSimilar, setSerieSimilar] = useState([]);
  const [serieVideos, setSerieVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSerieById(id),
        getSerieCredits(id),
        getSerieSimilar(id),
        getSerieVideos(id),
      ])
        .then(([serie, credits, similar, videos]) => {
          setSerie(serie);
          setSerieCredits(credits);
          setSerieSimilar(similar);
          setSerieVideos(videos);
        })
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);
  if (!serie) return null;

  return (
    <>
     
      <Background $image={getImages(serie.backdrop_path)} />
      <Container>
        <Cover>
          <img src={getImages(serie.poster_path)} />
        </Cover>

        <Info>
          <h2>{serie.name}</h2>
          <SpanGenres genres={serie.genres} />
          <p>{serie.overview}</p>
          <Credits credits={serieCredits} />
         <button onClick={() => setShowModal(true)}>Assista Trailer</button>
        </Info>
       
      </Container>
      {showModal && <Modal videos={serieVideos} setShowModal={setShowModal} />}
       <Slider info={serieSimilar} title="Séries Populares" route="series" />
    </>
  );
}
