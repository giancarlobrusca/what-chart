import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";

export const Nivo = ({ pokemons }) => (
  <Wrapper>
    <ResponsiveBar
      data={pokemons}
      keys={["hp", "speed"]}
      indexBy="name"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      innerPadding={10}
      colors={{ scheme: "nivo" }}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      groupMode="grouped"
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 1080px;
  height: 500px;
  justify-content: center;
  align-items: center;
`;
