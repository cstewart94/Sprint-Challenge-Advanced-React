import React from 'react';
import * as rtl from '@testing-library/react';
import PlayerCards from './components/playerCards';


it("Players defined", () => {
  const players = <PlayerCards />;
  expect(players).toBeDefined();
});