import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container fixed>
        <h1>The Movies Saga!</h1>
        <Router>
          <ul>
            <li style={{ listStyleType: "none" }}>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
        </Router>
      </Container>
    </div>
  );
}

export default App;
