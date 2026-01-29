import { Link } from "react-router-dom";
import Card from "../Card/index.jsx";
import { Container } from "./styles.js";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider({ info, title, route = "detalhe" }) {


  return (
    <Container>
    
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
              <Link to={`/${route}/${item.id}`}>
            <Card item={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </Container>
  );
}
