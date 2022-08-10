import React from 'react';

const GameBoard2 = ({name}) => {
  const rows = [
    {name: 'A', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'B', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'C', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'D', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'E', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'F', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'G', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'H', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'I', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    {name: 'J', row: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
  ];
  const column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='relative flex  flex-col gap-1 text-white mt-2'>
      <div
        className={`${
          name === 'Player' ? 'bg-green-200' : 'bg-red-200'
        }  text-brand font-bold text-center rounded w-2/3 mx-auto`}
      >
        {name} Board
      </div>
      <div className=' flex justify-end '>
        {/* column numbers */}
        {column.map((col) => (
          <div key={col} className='w-6 h-6 mr-3 text-end'>
            {col}
          </div>
        ))}
      </div>
      {/* row's name and boxes */}
      {rows.map((row, index) => (
        <div id={row.name} key={index} className='flex gap-1'>
          <span className='w-4'>{row.name}</span>
          {row.row.map((row, index) => (
            <div key={index} id={row} className='box w-8 h-8 border'></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard2;
