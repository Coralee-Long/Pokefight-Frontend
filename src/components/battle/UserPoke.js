import React from "react";
import UserHealthBar from "./UserHealthBar";

const UserPoke = ({ singlePoke }) => {
  console.log(singlePoke);
  return (
    <div className="UserMainContainer">
      <div className="healthBarUserContainer">
        <UserHealthBar singlePoke={singlePoke} />
      </div>
      <h1 className="BattleMainHeading">{singlePoke.name.english}</h1>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${singlePoke.id}.png`}
        alt={singlePoke.name.english}
        width="600px"
        height="auto"
        value={singlePoke.id}
        name={singlePoke.name.english}
      />
    </div>
  );
};

export default UserPoke;
