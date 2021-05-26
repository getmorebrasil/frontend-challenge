import Link from "next/link";
import imdb from "./api/imdb";
import { useEffect, useState } from "react";
import MovieRow from "../Components/MovieRow/index.js";
import FeatureMovie from "../Components/FeatureMovie";
import Header from "../Components/Header";
export default function read() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista
      let list = await imdb.getHomeList();
      //console.log(list);
      setMovieList(list);

      // pegando o featured
      let originals = list.filter((i) => i.slug === "originals");

      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      let chosen = originals[0].items.results[randomChosen];
      //console.log(chosen);
      let chosenInfo = await imdb.getMovieInfo(chosen.id, "tv");
      console.log(chosenInfo);
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <div className="page">
        <Header black={blackHeader} />
        {featureData && <FeatureMovie item={featureData} />}
        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>
      </div>
      <footer>
        Todos os direitos das imagens são da Netflix. Dados Extraidos de
        www.themoviedb.org
      </footer>
      {movieList.length <= 0 && (
        <div className="loading">
          <div id="loader" className="nfLoader"></div>
        </div>
      )}
    </>
  );
}
