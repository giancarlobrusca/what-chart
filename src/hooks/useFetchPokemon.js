import { message } from "antd";
import React from "react";

export function useFetchPokemon(pokemon) {
  const [pokeData, setPokeData] = React.useState();

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
      response
        .json()
        .then((data) => {
          setPokeData(data);
        })
        .catch((e) => {
          message.error(e);
        })
    );
  }, [pokemon]);

  return [pokeData];
}
