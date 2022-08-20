import React from 'react';

const ScoreBoard = ({attackCount, turn, hit, gameOver}) => {
  return (
    <div className='flex flex-col items-center md:gap-2 mt-1 md:mt-4 text-white transition-all'>
      {!gameOver ? (
        <>
          <h1 className=' text-center text-xl select-none'>ScoreBoard</h1>
          <h2 className=''>Count: {attackCount} </h2>
          <h2
            className={`${
              turn ? 'text-green-400' : 'text-red-400'
            } md:text-3xl `}
          >
            {turn ? 'Your Turn' : 'Computer Turn'}
          </h2>
          <h2 className='md:text-3xl'>
            {hit.hit && `${hit.message} ${hit.ship}`}
          </h2>
          {/* <h1>{JSON.stringify(inGameShip)}</h1> */}
        </>
      ) : (
        <>
          <h1 className='md:text-7xl mt-2 md:mt-10'>GAME OVER</h1>
          <h1 className='md:text-7xl md:mt-10 text-green-500'>You Win !!!</h1>
        </>
      )}
    </div>
  );
};

export default ScoreBoard;
