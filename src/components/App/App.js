import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <ul>
          <li style={{ listStyleType: 'none' }}>
            <Link  to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/details">Details</Link>
          </li> */}
        </ul>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
