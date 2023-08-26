import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


function MovieDetails() {
    const genres = useSelector(store => store.genres);


    return (<>
    <ul>
        <li>{genres.movie}</li>
        <li>{genres.description}</li>
        <img src={genres.image} alt={genres.movie}/>

    </ul>
    
    </>)
}



export default MovieDetails;