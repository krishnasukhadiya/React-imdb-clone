import React, { useState, useEffect } from "react";
import genres_id from "../utility/genres";

function Watchlist({ watchlist, handleRemoveWatchlist, setWatchList }) {
  let [search, setSearch] = useState("");
  let [genresList, setGenres] = useState(["All Genres"]);
  let [curGenre, setCurGenre] = useState("All Genres");
  let [curGenreKey, setCurGenreKey] = useState(0);
  let cnt = 1;
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let ascRatings = () => {
    let list = watchlist.sort((x, y) => {
      return x.vote_average - y.vote_average;
    });
    setWatchList([...list]);
  };
  let descRatings = () => {
    let list = watchlist.sort((x, y) => {
      return y.vote_average - x.vote_average;
    });
    setWatchList([...list]);
  };
  let ascPopularity = () => {
    let list = watchlist.sort((x, y) => {
      return x.popularity - y.popularity;
    });
    setWatchList([...list]);
  };
  let descPopularity = () => {
    let list = watchlist.sort((x, y) => {
      return y.popularity - x.popularity;
    });
    setWatchList([...list]);
  };
  useEffect(() => {
    let genres = watchlist.map((list) => {
      let ids = list.genre_ids.map((ids) => {
        return genres_id[ids];
      });
      return ids.join(",");
    });
    genres = new Set(genres.join(",") ? genres.join(",").split(",") : genres);
    setGenres(["All Genres", ...genres]);
  }, [watchlist]);
  let handleGenres = (genre) => {
    setCurGenreKey(
      Object.keys(genres_id).find((key) => genres_id[key] === genre)
        ? Object.keys(genres_id).find((key) => genres_id[key] === genre)
        : 0
    );
    setCurGenre(genre);
  };
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
      
        {genresList.map((genre) => {
          return (
            <div
              onClick={() => handleGenres(genre)}
              className={
                curGenre === genre
                  ? "flex justify-center items-center bg-blue-500 w-[9rem] h-[3rem] text-white  rounded-xl font-bold m-2"
                  : "flex justify-center items-center bg-gray-300 w-[9rem] h-[3rem] text-white  rounded-xl font-bold m-2"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] px-5 bg-gray-200 outline-none"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 ">
            <tr>
              <th>No.</th>
              <th>Movie</th>
              <th>
                <div className="flex justify-center">
                  <div className="mx-3" onClick={ascRatings}>
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                  <div>Ratings</div>
                  <div className="mx-3" onClick={descRatings}>
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center">
                  <div className="mx-3" onClick={ascPopularity}>
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                  <div>Popularity</div>
                  <div className="mx-3" onClick={descPopularity}>
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movie) => {
                if (curGenre != "All Genres") {
                  return movie.genre_ids.filter((id) => {
                    return genres_id[id] == curGenre;
                  }).length;
                } else {
                  return true;
                }
              })
              .filter((movie) => {
                return movie.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((list) => {
                return (
                  <>
                    <tr className="border-b-2">
                      <td>{cnt++}</td>
                      <td className="flex items-center px-6 py-4">
                        <img
                          className="h-[12rem] w-[10rem] "
                          src={`https://image.tmdb.org/t/p/original/${list.poster_path})`}
                        />
                        <div className="mx-10">{list.title}</div>
                      </td>
                      <td>{list.vote_average}</td>
                      <td>{list.popularity}</td>
                      {/* <td>{genres_id[list.genre_ids[0]]}</td> */}
                      <td>
                        {list.genre_ids
                          .map((ids) => {
                            return genres_id[ids];
                          })
                          .join(", ")}
                      </td>
                      <td
                        className="text-red-800 "
                        onClick={() => handleRemoveWatchlist(list)}
                      >
                        Delete
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
