import { MovieGrid } from "./components/MovieGrid";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import movieapi from "./Api";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  const getData = () => {
    movieapi
      .get("/")
      .then((response) => setMoviesData(response.data.moviesData));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <MovieGrid data={moviesData} />
    </div>
  );
}

export default App;
