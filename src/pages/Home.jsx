import Cards from "../Components/Cards";
import "./sass/Home.scss";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
const apikey = "bfa32b89b80b81864ec0b19038de69d4";
const ImgUrl = "https://image.tmdb.org/t/p/original";
const url = "https://api.themoviedb.org/3";
const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((items, index) => (
          <Cards key={index} img={`${ImgUrl}${items.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [trendingMovies, setTrending] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);
  const [PopulorMovies, setPopulorMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/trending/all/week?api_key=${apikey}&language=en-US`
      );
      setTrending(results);
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/now_playing?api_key=${apikey}&language=en-US`
      );
      setNowPlaying(results);
    };

    const fetchPopulorMovies = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/popular?api_key=${apikey}&language=en-US`
      );
      setPopulorMovies(results);
    };

    const fetchTvShows = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/tv/popular?api_key=${apikey}&language=en-US`);
      setTvShows(results);
    };

    fetchPopulorMovies();
    fetchTvShows();
    fetchTrending();
    fetchNowPlaying();
  }, []);

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: trendingMovies[3]
              ? `url(${`${ImgUrl}/${trendingMovies[3].poster_path}`})`
              : "rgb(16, 16, 16)",
          }}
        >
          {trendingMovies[3] && <h1>{trendingMovies[3].original_title}</h1>}
          {trendingMovies[3] && <p>{trendingMovies[3].overview}</p>}

          <div>
            <button>
              <BiPlay /> Play{" "}
            </button>
            <button>
              My List <AiOutlinePlus />{" "}
            </button>
          </div>
        </div>
        <Row title={"Popular on Netflix"} arr={trendingMovies} />
        <Row title={"Now Playing"} arr={NowPlaying} />
        <Row title={"Populor Movies"} arr={PopulorMovies} />
        <Row title={"Popular TV Shows"} arr={tvShows} />
      </section>
    </>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  arr: PropTypes.array,
};
export default Home;
