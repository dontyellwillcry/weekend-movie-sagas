import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


function MovieDetails() {
    const movies = useSelector(store => store.movies);


    return (<>
    <ul>
        <li>{movies.description}</li>
        <li></li>
        <li></li>

    </ul>
    
    </>)
}



export default MovieDetails;