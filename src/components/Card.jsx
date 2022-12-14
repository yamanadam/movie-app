import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { toastWarnNotify } from "../helpers/Toastify";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const Card = ({ poster_path, title, overview, vote_average, id }) => {
  const { currentUser } = useAuthContext();

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const navigate = useNavigate();

  return (
    <div
      className="movie"
      onClick={() => {
        navigate("detail/" + id);
        !currentUser && toastWarnNotify("Please Log in");
      }}
    >
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="img"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <h2>{overview}</h2>
      </div>
    </div>
  );
};

export default Card;
