import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
function Movies({ handleAddWatchlist, handleRemoveWatchlist, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  function prevPage() {
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  }
  function nextPage() {
    setPageNo(pageNo + 1);
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-5">
        {movies.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              handleAddWatchlist={handleAddWatchlist}
              handleRemoveWatchlist={handleRemoveWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination pageNo={pageNo} prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
}

export default Movies;
