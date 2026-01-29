import { Link } from "react-router-dom";
import Card from "../Card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider({ info, title, route = "detalhe" }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {info.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/${route}/${item.id}`}>
              <Card item={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
