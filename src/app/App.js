import "antd/dist/antd.css";

import React from "react";
import { Tabs, Card } from "antd";
import { usePokemons, useStats } from "../hooks";
import { Recharts, Nivo, Victory, GoogleCharts } from "../views";
import { MainLayout } from "../layout/Main";

const { TabPane } = Tabs;

const App = () => {
  const { pokemons, loading } = usePokemons();
  const [charmanderStats] = useStats(pokemons?.charmander, "Charmander");
  const [bulbasaurStats] = useStats(pokemons?.bulbasaur, "Bulbasaur");
  const [squirtleStats] = useStats(pokemons?.squirtle, "Squirtle");

  const data = [charmanderStats, bulbasaurStats, squirtleStats];

  if (loading) {
    return "Loading";
  }

  return (
    <MainLayout>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Recharts" key="1">
            <Recharts pokemons={data} />
          </TabPane>
          <TabPane tab="Victory" key="2">
            <Victory pokemons={data} />
          </TabPane>
          <TabPane tab="Nivo" key="3">
            <Nivo pokemons={data} />
          </TabPane>
          <TabPane tab="Google" key="4">
            <GoogleCharts pokemons={data} />
          </TabPane>
        </Tabs>
      </Card>
    </MainLayout>
  );
};

export default App;
