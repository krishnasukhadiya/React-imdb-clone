import React from "react";
import LOGO from "../../public/movie-logo.png";
import { Link } from "react-router-dom";
function NavigationBar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-3">
      <img src={LOGO} className="w-[50px]"></img>
      <Link to="/" className="text-3xl text-blue-500 font-bold">Movies</Link>
      <Link to="/watchlist" className="text-3xl text-blue-500 font-bold">Watchlist</Link>
    </div>
  );
}

export default NavigationBar;
