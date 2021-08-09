import React from "react";
import { useStats } from "../hooks";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import styled from "styled-components";

export const Victory = ({ pokemons, loading }) => {
  const [stat, setStat] = React.useState("hp");

  const [charmanderStats] = useStats(pokemons?.charmander, "Charmander");
  const [bulbasaurStats] = useStats(pokemons?.bulbasaur, "Bulbasaur");
  const [squirtleStats] = useStats(pokemons?.squirtle, "Squirtle");

  const data = [charmanderStats, bulbasaurStats, squirtleStats];

  if (!charmanderStats | !bulbasaurStats | !squirtleStats) {
    return "Loading";
  }

  return (
    <Wrapper>
      <div>
        <button onClick={() => setStat("hp")}>HP</button>
        <button onClick={() => setStat("speed")}>Speed</button>
      </div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 15 }}>
        <VictoryAxis
          tickValues={[1, 2, 3]}
          tickFormat={["Charmander", "Bulbasaur", "Squirtle"]}
        />
        <VictoryAxis dependentAxis />
        <VictoryBar data={data} x="name" y={stat} />
      </VictoryChart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;

  div {
    text-align: center;

    button {
      cursor: pointer;
    }
  }
`;
