import "antd/dist/antd.css";

import React from "react";
import { Tabs, Card } from "antd";
import { usePokemons } from "../hooks";
import { Recharts, Visx, Victory } from "../views";
import { MainLayout } from "../layout/Main";

const { TabPane } = Tabs;

const App = () => {
  const { pokemons, loading } = usePokemons();

  return (
    <MainLayout>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Recharts" key="1">
            <Recharts pokemons={pokemons} loading={loading} />
          </TabPane>
          <TabPane tab="Victory" key="2">
            <Victory pokemons={pokemons} loading={loading} />
          </TabPane>
          <TabPane tab="Visx" key="3">
            <Visx pokemons={pokemons} loading={loading} />
          </TabPane>
          <TabPane tab="Nivo" key="4">
            Nivo
          </TabPane>
        </Tabs>
      </Card>
    </MainLayout>
  );
};

export default App;
