import React from 'react';

const ScoreBoard = ({attackCount, turn, hit, gameOver}) => {
  return (
    <div className='flex flex-col items-center gap-2 mt-4 text-white transition-all'>
      {!gameOver ? (
        <>
          <h1 className=' text-center text-xl select-none'>ScoreBoard</h1>
          <h2 className=''>Count: {attackCount} </h2>
          <h2
            className={`${turn ? 'text-green-400' : 'text-red-400'} text-3xl `}
          >
            {turn ? 'Your Turn' : 'Computer Turn'}
          </h2>
          <h2 className='text-3xl'>
            {hit.hit && `${hit.message} ${hit.ship}`}
          </h2>
        </>
      ) : (
        <>
          <h1>GAME OVER</h1>
        </>
      )}
    </div>
  );
};

export default ScoreBoard;
