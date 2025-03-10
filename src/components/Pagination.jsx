import React from "react";

function Pagination({ pageNo, prevPage,nextPage }) {
  return (
    <div className="bg-gray-400 p-4 mt-3 flex justify-center">
      <div className="px-5 hover:cursor-pointer hover:scale-150" onClick={prevPage}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-5 hover:cursor-pointer hover:scale-150" onClick={nextPage}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
