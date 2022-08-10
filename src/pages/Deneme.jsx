import React from 'react';
import FleetSetup2 from '../components/FleetSetup2';
import GameBoard2 from '../components/GameBoard2';

const Deneme = () => {
  return (
    <main className='bg-brand h-screen select-none flex flex-col'>
      <div className='flex justify-around'>
        <GameBoard2 name='Player' />
        <GameBoard2 name='Computer' />
      </div>
      <FleetSetup2 />
    </main>
  );
};

export default Deneme;
