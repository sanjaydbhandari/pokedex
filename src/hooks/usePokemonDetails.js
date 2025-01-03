import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonDetails = (id, pokemonName = "") => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonData = async () => {
    setIsLoading(true);
    let res;
    try {
      if (pokemonName) {
        res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
      } else {
        res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      }
      const similarPokemonType = await axios.get(
        `https://pokeapi.co/api/v2/type/${
          res.data.types ? res.data.types[0].type.name : `fire`
        }`
      );
      setPokemon({
        name: res.data.name,
        stats: res.data.stats,
        image: res.data.sprites.other.dream_world.front_default,
        height: res.data.height,
        weight: res.data.weight,
        types: res.data.types.map((t) => t.type.name),
        similarPokemonType: similarPokemonType.data.pokemon.slice(0, 5),
        attack: res.data.moves.slice(0, 5),
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return [isLoading, pokemon];
};
