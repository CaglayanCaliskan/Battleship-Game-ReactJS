import React from 'react';

const SinglePlayer = () => {
  const boardWidth = 10;
  const boardHeight = 10;
  const emptyBoard = [[1], [2], [3], [4], [5], [6]];
  return (
    <div className='bg-brand h-screen w-full grid grid-rows-2 text-white'>
      <div className='border flex justify-center items-center'>
        {/* box */}
        <div className='grid grid-cols-3 '>
          {emptyBoard.map((box) => {
            return <div>{box}</div>;
          })}
        </div>

        {/* box */}
      </div>
      <div className='border'>2</div>
    </div>
  );
};

export default SinglePlayer;
