import { Route, Routes } from "react-router-dom";
import SeriesDetail from "../containers/SeriesDetail";

import Home from "../containers/Home";
import Series from "../containers/Series";
import Movies from "../containers/Movies";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detail";
import MoviesDetail from "../containers/MoviesDetail";

export default function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/series/:id" element={<SeriesDetail />} />
        <Route path="/filmes/:id" element={<MoviesDetail />} />
      </Route>
    </Routes>
  );
}
