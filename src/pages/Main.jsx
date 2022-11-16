import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { useAuthContext } from "../context/AuthProvider";
import { toastWarnNotify } from "../helpers/Toastify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuthContext();

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && currentUser) {
      getMovies(SEARCH_API + search);
      setSearch(" ");
    } else if (!currentUser) {
      toastWarnNotify("Please Log in");
    } else {
      toastWarnNotify("Please enter a text search-bar");
    }
  };

  return (
    <>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md outline-none border p-1 m-2"
          onChange={(e) => setSearch(e.target.value)}
          value={search || " "}
        />
        <button className="text-red-500" type="submit">
          Search
        </button>
      </form>

      {loading ? (
        <button type="button" class="bg-indigo-500 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      ) : (
        <div className="flex justify-center flex-wrap">
          {movies.map((movie) => (
            // console.log(movie)
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Main;
