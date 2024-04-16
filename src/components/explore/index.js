import { useState, useRef, useCallback } from "react";

import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "../../common/movieCard";

import useMovieSearch from "../../hooks/useMovieSearch";
import "./style.css";

function Explore() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { movies, hasMore, loading, error } = useMovieSearch(query, pageNumber);
  const observer = useRef();
  const lastMovie = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      movieName: data.get("movieName"),
      movieYear: data.get("movieYear"),
    };
    if (formData.movieName) {
      setQuery(formData);
      setPageNumber(1);
    }
  };

  return (
    <div className="container ">
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid justify-content-between">
          <form
            className="d-flex justify-content-evenly w-100"
            onSubmit={handleOnSubmit}
          >
            <input
              className="form-control me-2"
              required
              name="movieName"
              type="search"
              placeholder="Movie Name"
            />
            <input
              className="form-control me-2 w-25"
              name="movieYear"
              type=""
              placeholder="Movie Year"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
      </nav>

      {movies?.length ? (
        <div className="container">
          <div className="row row-cols-5">
            {movies.map((item, index) => {
              if (movies.length === index + 1) {
                return (
                  <div key={index} ref={lastMovie}>
                    <MovieCard movie={item} />
                  </div>
                );
              } else {
                return <MovieCard key={index} movie={item} />;
              }
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Explore;
