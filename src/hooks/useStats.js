import React from "react";

export function useStats(pokemon, name) {
  const [stats, setStats] = React.useState();

  React.useEffect(() => {
    if (pokemon) {
      const HP = pokemon.filter((poke) => poke.stat.name === "hp");
      const speed = pokemon.filter((poke) => poke.stat.name === "speed");

      setStats({
        name: `${name}`,
        hp: HP[0].base_stat,
        speed: speed[0].base_stat,
      });
    }
  }, [pokemon, name]);

  return [stats];
}
