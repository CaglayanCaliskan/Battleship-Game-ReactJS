import React from 'react';
import FleetSetup from '../components/FleetSetup';
import GameBoard from '../components/GameBoard';

const SinglePlayer = () => {
  return (
    <main className='bg-brand h-screen select-none flex flex-col'>
      <div className='flex justify-around'>
        <GameBoard name='Player' />
        <GameBoard name='Computer' />
      </div>
      <FleetSetup />
    </main>
  );
};

export default SinglePlayer;
