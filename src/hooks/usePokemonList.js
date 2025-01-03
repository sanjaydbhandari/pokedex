import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonList = () => {
  const [pokemonState, setPokemonState] = useState({
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    pokemonList: [],
    isLoading: true,
    nextUrl: "",
    prevUrl: "",
  });

  const pokemonDetails = async () => {
    setPokemonState((state) => ({ ...state, isLoading: true }));
    const response = await axios.get(pokemonState.pokedexUrl);

    setPokemonState((state) => ({
      ...state,
      nextUrl: response.data.next,
      prevUrl: response.data.previous,
    }));
    const pokemonResult = response.data.results;
    const pokemonResultPromise = pokemonResult.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonData = await axios.all(pokemonResultPromise);

    const res = pokemonData.map((pokeData) => {
      // console.log(pokeData.data);
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        type: pokemon.types,
      };
    });

    setPokemonState((state) => ({
      ...state,
      pokemonList: res,
      isLoading: false,
    }));
  };

  useEffect(() => {
    pokemonDetails(pokemonState.pokedexUrl);
  }, [pokemonState.pokedexUrl]);

  return [pokemonState, setPokemonState];
};
