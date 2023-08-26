import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  const genres = useSelector((store) => store.genres);
  const info = useSelector((store) => store.info);
  console.log(info);

  return (
    <>
      <ul>
        {genres.map((movieData) => (
          <li key={movieData.title}>
            Movie: {movieData.title}
            <br />
            Genre: {movieData.genres.join(", ")}
          </li>
        ))}
        <li>{info.description}</li>

        <img src={info.image} alt={genres.movie} />
      </ul>
    </>
  );
}

export default MovieDetails;
