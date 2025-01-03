import { useParams } from "react-router-dom";
import React from "react";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
const PokemonDetails = ({ pokemonName }) => {
  const { id } = useParams();
  const [isLoading, pokemon] = usePokemonDetails(id, pokemonName);
  return (
    <div className="flex justify-center w-full">
      <div className="rounded-lg p-6 shadow-lg flex flex-col items-center gap-5 w-full mx-5 md:w-1/3 md:mx-0 ">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <div className="relative flex justify-center w-full">
              <img
                src={pokemon.image}
                className="absolute h-[150px] scale-110 animate-ping opacity-30 z-0 "
                alt=""
              />
              <img src={pokemon.image} className="h-[150px] z-0 " alt="" />
            </div>
            <p className="text-3xl tracking-widest font-bold capitalize">
              {pokemon.name}
            </p>

            <div className="stats grid grid-cols-3 w-full items-center gap-2">
              {pokemon.stats.map((s) => {
                return (
                  <div className="flex flex-col text-center capitalize h-full border-2 rounded-lg p-1">
                    <p className="font-bold">{s.stat.name}</p>{" "}
                    <span>{s.base_stat}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between w-full">
              <p className="font-bold">
                Height :{" "}
                <span className="font-normal">{pokemon.height} ft</span>
              </p>
              <p className="font-bold">
                Weight :{" "}
                <span className="font-normal">{pokemon.weight} kg</span>{" "}
              </p>
            </div>
            <div className="w-full flex justify-between flex-col items-center gap-3">
              <p className="font-bold tracking-widest">Type</p>
              <div className="types flex gap-2 flex-wrap">
                {pokemon.types &&
                  pokemon.types.map((t) => (
                    <p
                      key={t}
                      className=" bg-purple-400 px-3 py-1 text-center rounded-md font-bold capitalize  hover:scale-110 text-sm"
                    >
                      {t}
                    </p>
                  ))}
              </div>
            </div>
            <div className="">
              <p className="font-bold tracking-wider py-2 px-6 rounded-lg text-center ">
                {`Attacks `}
              </p>
              <ul className="similarType flex w-full justify-around flex-wrap gap-2">
                {pokemon.attack == null ? (
                  <p>Loading...</p>
                ) : (
                  pokemon.attack.map(({ move }) => (
                    <li
                      key={move.url}
                      className=" bg-purple-400  py-2 px-4 rounded-lg capitalize hover:scale-110 text-sm"
                    >
                      {move.name}
                    </li>
                  ))
                )}
              </ul>
            </div>
            <p className="font-bold tracking-wider tracking-wider text-center ">
              {`Similar ${pokemon.types && pokemon.types[0]} Type Pokemon`}
            </p>
            <ul className="similarType flex w-full justify-around flex-wrap gap-2">
              {pokemon.similarPokemonType == null ? (
                <p>Loading...</p>
              ) : (
                pokemon.similarPokemonType.map(({ pokemon }) => (
                  <li
                    key={pokemon.url}
                    className=" bg-purple-400  py-2 px-4 rounded-lg capitalize hover:scale-110 text-sm"
                  >
                    {pokemon.name}
                  </li>
                ))
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
