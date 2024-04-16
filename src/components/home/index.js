import { useState } from "react";
import MovieCard from "../../common/movieCard";
import "./style.css";

function Home() {
  const movies = JSON.parse(window.localStorage.getItem("favMovies"))

  const [favMovies,setFavMovies] = useState(movies?.length?movies:[]) ;
  console.log(favMovies);
  return (
    <div className="container">
      <h2 className="title">favourites</h2>

      <div className="container">
        <div className="row row-cols-4">
          {favMovies.map((item, index) => (
            <MovieCard key={index} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
