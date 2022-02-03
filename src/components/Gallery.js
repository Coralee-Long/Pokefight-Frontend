import React from "react";

const Gallery = ({ pokemon, type }) => {
  console.log(pokemon);
  return (
    <div>
      <ul>
        {pokemon
          .filter((filteredPoke) => filteredPoke.type === type)
          .map((pokeByType) => (
            <li>pokeByType</li>
          ))}
      </ul>
    </div>
  );
};

export default Gallery;
