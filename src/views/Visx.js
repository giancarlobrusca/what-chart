import React from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { GradientTealBlue } from "@visx/gradient";
import { useStats } from "../hooks";

export const Visx = ({ pokemons }) => {
  const [charmanderStats] = useStats(pokemons?.charmander, "Charmander");
  const [bulbasaurStats] = useStats(pokemons?.bulbasaur, "Bulbasaur");
  const [squirtleStats] = useStats(pokemons?.squirtle, "Squirtle");

  if (!charmanderStats | !bulbasaurStats | !squirtleStats) {
    return "Loading";
  }

  return (
    <svg width="100%" height={500}>
      <GradientTealBlue id="teal" />
      <rect width="100%" height={500} fill="url(#teal)" rx={14} />
      <Group>
        <Bar x="hp" y="hp" fill="rgba(23, 233, 217, .5)" />
      </Group>
    </svg>
  );
};
