import { useEffect, useState } from "react";
import { Container, Background} from "./styles.js";


import { getMovieVideos } from "../../services/getData.js";



export default function Modal({ videos, setShowModal }) {
  if (!videos || videos.length === 0) {
    return (
      <Background onClick={() => setShowModal(false)}>
        <Container onClick={(e) => e.stopPropagation()}>
          <p style={{ color: "#f80d0d" }}>❌Trailer não disponível 😕</p>
        </Container>
      </Background>
    );
  }

  const trailer =
    videos.find(v => v.site === "YouTube" && v.type === "Trailer") ||
    videos.find(v => v.site === "YouTube");

  if (!trailer) {
    return (
      <Background onClick={() => setShowModal(false)}>
        <Container onClick={(e) => e.stopPropagation()}>
          <p style={{ color: "#fff" }}>Trailer não disponível 😕</p>
        </Container>
      </Background>
    );
  }

  return (
    <Background onClick={() => setShowModal(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Trailer"
          height="500px"
          width="100%"
          allowFullScreen
        />
      </Container>
    </Background>
  );
}


{/*export default function Modal({ movieId, setShowModal }) {
const [movie, setMovie] = useState([]);


     useEffect(() => {
      if (!movieId) return;

    async function getMovies() {
      setMovie(await getMovieVideos(movieId));
    }

    getMovies();
     },[movieId]);

     useEffect(() =>{
   
      
     })
    if (!movie) { 
    return null;
  }

return (
    <Background onClick={()=> setShowModal(false)}> 
    {movie && ( 
    <Container>
        <iframe
        src={`https://www.youtube.com/embed/${movie[0].key}`}
        title="Youtube Video Player"
        height="500px"
        width="100%"
      ></iframe>
    </Container>
    )}
</Background> 
  )} */}
