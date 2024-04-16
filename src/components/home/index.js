import MovieCard from "../../common/movieCard";
import "./style.css";

function Home() {
  const favMovies = window.localStorage.getItem("favMovies");
  console.log(favMovies);
  return (
    <div className="container">
      <h2 className="title">favourites</h2>

      <div className="container">
        <div className="row row-cols-4">
          {[].map((item, index) => (
            <MovieCard key={index} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
