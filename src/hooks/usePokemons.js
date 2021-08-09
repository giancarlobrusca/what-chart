import { useFetchPokemon } from "./useFetchPokemon";

export function usePokemons() {
  const [squirtle] = useFetchPokemon("squirtle");
  const [charmander] = useFetchPokemon("charmander");
  const [bulbasaur] = useFetchPokemon("bulbasaur");

  if (!squirtle || !charmander || !bulbasaur) {
    return { pokemons: null, loading: true };
  } else {
    return {
      pokemons: {
        squirtle: squirtle.stats,
        charmander: charmander.stats,
        bulbasaur: bulbasaur.stats,
      },
      loading: false,
    };
  }
}
