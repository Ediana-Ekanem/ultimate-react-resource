import React, { useState } from "react";
import { clubList } from "./ListData";

const List = () => {
  let [clubs, setClubs] = useState(clubList);

  const addClub = (e) => {
    setClubs([...clubs, { id: clubs.length, name: e }]);
    console.log(e);
  };

  const removeClub = (e) => {
    let upd = clubs.filter(
      (each) => each.name.toLocaleLowerCase() != e.toLocaleLowerCase()
    );
    setClubs(upd);
  };
  return (
    <div align="center" className="bg-pink-700  h-screen ">
      <div className="pt-40 text-white">
        <h1 className="font-semibold text-lg mb-10">
          List of Premier League Clubs
        </h1>
        <ol className="space-y-5">
          {clubs.map((club) => {
            return <li key={club.id}>{club.name}</li>;
          })}
        </ol>
        <div className="space-x-5">
          <button
            className="bg-slate-700 text-white rounded py-1 px-4 font-bold mt-5"
            onClick={() => addClub("SouthHampton")}
          >
            Add Club
          </button>
          <button
            className="bg-slate-700 text-white rounded py-1 px-4 font-bold mt-5"
            onClick={() => removeClub("chelsea")}
          >
            Remove Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
