import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import NavigationBar from "./components/NavigationBar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("movies", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };
  let handleRemoveWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((list) => {
      return list.id != movieObj.id;
    });
    localStorage.setItem("movies", JSON.stringify(filteredWatchlist));
    setWatchList(filteredWatchlist);
  };
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      setWatchList(JSON.parse(localStorage.getItem("movies")));
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddWatchlist={handleAddWatchlist}
                  handleRemoveWatchlist={handleRemoveWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                handleRemoveWatchlist={handleRemoveWatchlist}
                setWatchList={setWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
