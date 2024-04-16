import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./style.css";
import { useState } from "react";

function MovieCard({ movie, index }) {
  const [isLike, setIsLike] = useState(false);

  const handleLikedMovies = (flag) => {
    console.log(flag)
    const favMovies = window.localStorage.getItem("favMovies");
    if (JSON.parse(favMovies)?.length) {
      let movieArray = JSON.parse(favMovies)

    
        movieArray.push(movie)

      window.localStorage.setItem(
        "favMovies",
        JSON.stringify(movieArray)
      );

    } else {
      window.localStorage.setItem("favMovies", JSON.stringify([movie]));
    }
    setIsLike(!isLike)
    //
  };



  return (
    <div key={index} className="col" style={{ margin: "15px 0px" }}>
      <div className="card" style={{ backgroundColor: "gray" }}>
        {JSON.parse(window.localStorage.getItem("favMovies"))?.find(mov => mov.Title === movie.Title) ? <FavoriteIcon className="addIcon" onClick={()=>handleLikedMovies(false)} /> : <FavoriteBorderIcon className="addIcon" onClick={()=>handleLikedMovies(true)} />}
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div className="card-body">
          <p className="movieTitle">{movie.Title}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
