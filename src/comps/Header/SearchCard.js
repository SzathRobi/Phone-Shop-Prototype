import React from "react";

export default function SearchCard({ name, img, searchExact }) {
  return (
    <div className="SearchCard" onClick={() => searchExact(name)}>
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div>
  );
}
