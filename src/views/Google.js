import Chart from "react-google-charts";
import styled from "styled-components";

export const GoogleCharts = ({ pokemons }) => {
  const data = [
    ["Name", "HP", "Speed"],
    [pokemons[0].name, pokemons[0].hp, pokemons[0].speed],
    [pokemons[1].name, pokemons[1].hp, pokemons[1].speed],
    [pokemons[2].name, pokemons[2].hp, pokemons[2].speed],
  ];

  return (
    <Wrapper>
      <Chart
        width={"800px"}
        height={"500px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          colors: ["#8bc34a", "#fdd835"],
          chart: {
            title: "Starting Pokemons Comparison",
            subtitle: "HP & Speed base stats",
          },
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 1080px;
  justify-content: center;
  align-items: center;
`;
