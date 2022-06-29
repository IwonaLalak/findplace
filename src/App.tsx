import React from 'react';
import Layout from './components/layout/Layout';
import GameStage from './components/stages/game/GameStage';
import './styles/styles.scss';

function App() {
  return (
    <Layout>
      <GameStage />
    </Layout>
  );
}

export default App;
