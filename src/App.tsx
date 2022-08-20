import React from 'react';
import Layout from './components/layout/Layout';
import About from './components/views/about/About';
import GameStage from './components/views/game/GameStage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/styles.scss';
import Test from './components/views/test/Test';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<GameStage />} />
          <Route path="/game" element={<GameStage />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
