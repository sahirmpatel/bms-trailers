import { MovieGrid } from "./components/MovieGrid";
import axios from "axios";
import { useEffect } from "react";
import data from "./moviedata.json";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("https://peaceful-forest-62260.herokuapp.com/")
  //     .then((res) => console.log("res", res));
  // }, []);

  return (
    <div className="App">
      <header>Movie Trailers</header>
      <MovieGrid data={data} />
    </div>
  );
}

export default App;
