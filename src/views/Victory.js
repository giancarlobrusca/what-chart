import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";
import styled from "styled-components";

export const Victory = ({ pokemons }) => {
  const [stat, setStat] = React.useState("hp");

  return (
    <Wrapper>
      <div>
        <button onClick={() => setStat("hp")}>HP</button>
        <button onClick={() => setStat("speed")}>Speed</button>
      </div>
      <VictoryChart domainPadding={{ x: 15 }}>
        <VictoryAxis tickFormat={["Charmander", "Bulbasaur", "Squirtle"]} />
        <VictoryAxis dependentAxis domain={[0, 70]} />
        <VictoryBar
          style={{
            data: { fill: stat === "hp" ? "#8bc34a" : "#fdd835", width: 20 },
          }}
          data={pokemons}
          x="name"
          y={stat}
        />
      </VictoryChart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1080px;
  height: 500px;

  div {
    text-align: center;

    button {
      cursor: pointer;
    }
  }
`;
