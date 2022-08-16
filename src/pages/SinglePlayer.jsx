import React from 'react';
import ComputerBoard from '../components/ComputerBoard';
import FleetSetup from '../components/FleetSetup';
import GameBoard from '../components/PlayerBoard';
import {useSelector} from 'react-redux';
import ScoreBoard from '../components/ScoreBoard';

const SinglePlayer = () => {
  const {game} = useSelector((state) => state.gameOptionsSlice);

  return (
    <main className='bg-brand h-screen select-none flex flex-col'>
      <div className='flex justify-around'>
        <GameBoard />
        <ComputerBoard />
      </div>
      {!game ? <FleetSetup /> : <ScoreBoard />}
    </main>
  );
};

export default SinglePlayer;
