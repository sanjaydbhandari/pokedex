import Pokemon from "./Pokemon";
import { usePokemonList } from "../hooks/usePokemonList";

const PokemonList = () => {
  const [pokemonState, setPokemonState] = usePokemonList();

  return (
    <>
      {pokemonState.isLoading ? (
        <p className="flex justify-center items-center w-[90%] h-screen">
          Loading...
        </p>
      ) : (
        <div className="pokemon-wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-[90%]">
          {pokemonState.pokemonList.map((pokemon) => (
            <Pokemon
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              image={pokemon.image}
            />
          ))}
        </div>
      )}
      <div className="navigator flex gap-1 w-[90%] justify-end pb-10">
        <button
          disabled={pokemonState.prevUrl == null}
          className={`py-2 px-6 shadow-xl ${
            pokemonState.prevUrl == null ? "opacity-50" : "hover:bg-gray-200"
          }`}
          onClick={() =>
            setPokemonState({
              ...pokemonState,
              pokedexUrl: pokemonState.prevUrl,
            })
          }
        >
          Prev
        </button>
        <button
          disabled={pokemonState.nextUrl == null}
          className={`py-2 px-6 hover:bg-gray-200 shadow-xl ${
            pokemonState.nextUrl == null ? "opacity-50" : "hover:bg-gray-200"
          }`}
          onClick={() =>
            setPokemonState({
              ...pokemonState,
              pokedexUrl: pokemonState.nextUrl,
            })
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PokemonList;
