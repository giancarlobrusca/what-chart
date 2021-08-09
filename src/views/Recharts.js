import { useStats } from "../hooks";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import styled from "styled-components";

export const Recharts = ({ pokemons, loading }) => {
  const [charmanderStats] = useStats(pokemons?.charmander, "Charmander");
  const [bulbasaurStats] = useStats(pokemons?.bulbasaur, "Bulbasaur");
  const [squirtleStats] = useStats(pokemons?.squirtle, "Squirtle");

  const data = [charmanderStats, bulbasaurStats, squirtleStats];

  if (!charmanderStats | !bulbasaurStats | !squirtleStats) {
    return "Loading";
  }

  return (
    <Wrapper>
      <BarChart width={730} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend verticalAlign="top" height={1} />
        <Tooltip />
        <Bar
          maxBarSize={40}
          dataKey="hp"
          fill="#8bc34a"
          label={{ fill: "black" }}
        />
        <Bar
          maxBarSize={40}
          dataKey="speed"
          fill="#fdd835"
          label={{ fill: "black" }}
        />
      </BarChart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
