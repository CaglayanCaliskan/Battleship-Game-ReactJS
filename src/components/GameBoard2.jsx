import React from 'react';
import {useSelector} from 'react-redux';

const GameBoard2 = ({name}) => {
  const {playerFleet} = useSelector((state) => state.fleetsSlice);
  const {rotate} = useSelector((state) => state.gameOptionsSlice);
  const selected = playerFleet.filter((ship) => ship.selected);
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

  const dragEnter = (e) => {
    const currentTarget = e.currentTarget;
    const parentElement = e.currentTarget.parentElement;

    //conditions for board
    if (!rotate) {
      //gemi dik geliyorsa
      //check ship height
      const shipSize = selected[0].size;
      console.dir(parentElement);
    } else {
      //gemi yatay geliyorsa
    }
  };
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
      <div id='Board'>
        {rows.map((row, index) => (
          <div id={row.name} key={index} className='flex gap-1'>
            <span className='w-4'>{row.name}</span>
            {row.row.map((row, index) => (
              <div
                key={index}
                id={row}
                onDragEnter={dragEnter}
                className={`box w-8 h-8 border ${
                  name === 'Player' ? 'bg-green-200 hover:bg-blue-300' : ''
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard2;
