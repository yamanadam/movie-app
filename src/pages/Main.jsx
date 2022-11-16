import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <div className="flex justify-center flex-wrap">
      {movies.map((movie) => (
        // console.log(movie)
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Main;
