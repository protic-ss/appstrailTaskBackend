import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./style.css";

function MovieCard({ movie, index }) {
  const handleLikedMovies = () => {
    const favMovies = window.localStorage.getItem("favMovies");

    if (favMovies) {
      console.log(JSON.parse(favMovies));
      window.localStorage.setItem(
        "favMovies",
        JSON.stringify(favMovies, movie)
      );
    } else {
      window.localStorage.setItem("favMovies", JSON.stringify([movie]));
    }

    //
  };

  return (
    <div key={index} className="col" style={{ margin: "15px 0px" }}>
      <div className="card" style={{ backgroundColor: "gray" }}>
        <FavoriteBorderIcon className="addIcon" onClick={handleLikedMovies} />
        {/* <FavoriteIcon className="addIcon"/> */}

        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div className="card-body">
          <p className="movieTitle">{movie.Title}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
