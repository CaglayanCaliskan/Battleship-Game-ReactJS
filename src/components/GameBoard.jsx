import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {dropAvailable} from '../features/fleetsSlice';

const GameBoard = ({name}) => {
  const [drop, setDrop] = useState(false);

  const {playerFleet} = useSelector((state) => state.fleetsSlice);
  const {rotate} = useSelector((state) => state.gameOptionsSlice);
  const selectedShip = playerFleet.filter((ship) => ship.selected);
  const dispatch = useDispatch();
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
  let availableGreenBox = [];

  const dragEnter = (e) => {
    const currentBox = e.currentTarget;
    const parentRow = currentBox.parentElement;
    const board = parentRow.parentElement;
    const boardArray = board.children;
    const shipSize = selectedShip[0].size;
    //conditions for board

    if (!rotate && board.id === 'Playerboard') {
      //Rotate Vertical Ship
      //board.childNodes.length = 10
      //Shipsize = dynamic
      const rowIndex = board.childNodes.length - shipSize;
      const index = Array.from(boardArray).indexOf(parentRow);
      //Board Set Stage
      if (index <= rowIndex) {
        setDrop(true);
        for (let i = 0; i < shipSize; i++) {
          const targetBox =
            boardArray[index + i].children[Number(e.currentTarget.id)];
          targetBox.classList.add('bg-green-500');
          const name = targetBox.parentElement.id.toLowerCase();
          const number = targetBox.id;
          availableGreenBox.push({name, number});
        }
        dispatch(dropAvailable({drop: true, availableGreenBox}));
      } else {
        setDrop(false);
        dispatch(dropAvailable({drop: false, availableGreenBox}));
      }
    } else if (board.id === 'Computerboard') {
      return;
    } else {
      //Rotate Horizontal Ship

      //Board Set Stage
      const rowLength = parentRow.children.length - 1;
      // -1 coz of Alphabet
      const index = Number(currentBox.id) + shipSize - 1;

      if (index <= rowLength) {
        setDrop(true);

        for (let i = 0; i < shipSize; i++) {
          const targetBox = parentRow.children[Number(currentBox.id) + i];
          targetBox.classList.add('bg-green-500');
          const name = targetBox.parentElement.id.toLowerCase();
          const number = targetBox.id;
          availableGreenBox.push({name, number});
        }

        dispatch(dropAvailable({drop: true, availableGreenBox}));
      } else {
        setDrop(false);
        dispatch(dropAvailable({drop: false, availableGreenBox}));
      }
    }
  };
  const dragLeave = () => {
    setDrop(false);
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => box.classList.remove('bg-green-500'));
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
      <div id={name + 'board'} className='relative  flex flex-col gap-1 z-10'>
        {rows.map((row, index) => (
          <div id={row.name} key={index} className='flex gap-1'>
            <span className='w-4'>{row.name}</span>
            {row.row.map((row, index) => {
              return (
                <div
                  key={index}
                  id={row}
                  data='undefined'
                  onDragEnter={dragEnter}
                  onDragLeaveCapture={dragLeave}
                  className={`box w-8 h-8 border ${
                    name === 'Player'
                      ? 'bg-blue-200 hover:opacity-80'
                      : 'cursor-pointer'
                  }`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
