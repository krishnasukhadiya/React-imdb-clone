import React from "react";

function MovieCard({
  movie,
  handleAddWatchlist,
  handleRemoveWatchlist,
  watchlist,
}) {
  function isAddedtoWatchlist(movieObj) {    
    let getMovie = watchlist.filter((list) => {
      return list.id == movieObj.id
    });
    return getMovie.length;
  }
  return (
    <div
      className="h-[40vh] w-[150px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
      {isAddedtoWatchlist(movie) ? (
        <div
          onClick={() => handleRemoveWatchlist(movie)}
          className="m-4 flex justify-center h-8 w-8 items-center bg-gray-900/60 rounded-lg"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddWatchlist(movie)}
          className="m-4 flex justify-center h-8 w-8 items-center bg-gray-900/60 rounded-lg"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-center bg-gray-900/40 w-full p-1 rounded-b-xl">
        {movie.original_title}
      </div>
    </div>
  );
}

export default MovieCard;
