import { MovieGrid } from "./components/MovieGrid";
import axios from "axios";
import { useEffect } from "react";
import data from "./moviedata.json";
import Header from "./components/Header";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("https://peaceful-forest-62260.herokuapp.com/")
  //     .then((res) => console.log("res", res));
  // }, []);

  return (
    <div className="App">
      <Header />
      <MovieGrid data={data} />
    </div>
  );
}

export default App;
