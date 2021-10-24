import { MovieGrid } from "./components/MovieGrid";
import axios from "axios";
import { useState, useEffect } from "react";
import data from "./moviedata.json";
import Header from "./components/Header";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  const getData = () => {
    axios
      .get("https://peaceful-forest-62260.herokuapp.com/")
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
