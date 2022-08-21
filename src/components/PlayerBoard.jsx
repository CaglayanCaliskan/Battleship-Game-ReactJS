import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {dropAvailable} from '../features/fleetsSlice';
import {dropShip} from '../features/fleetsSlice';

const PlayerBoard = ({PlayerRef, gameOver, turn}) => {
  const [drop, setDrop] = useState(false);

  const {playerFleet} = useSelector((state) => state.fleetsSlice);
  const ship = playerFleet.find((ship) => ship.selected === true);
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
    <div className='relative flex  flex-col  gap-0 md:gap-1 text-white md:mt-2 text-sm md:text-base'>
      <div
        className={`bg-green-500 absolute md:relative -left-24 md:left-0 md:top-0 top-28 -rotate-90 md:rotate-0  text-brand font-bold text-center rounded w-36 md:w-2/3 p-1 md:p-0 mx-auto`}
      >
        Player Board
      </div>
      <div
        className=' flex  md:justify-end justify-center gap-3 ml-5 md:ml-0
       md:gap-0'
      >
        {/* column numbers */}
        {column.map((col) => (
          <div key={col} className=' md:w-6 md:h-6 md:mr-3 md:text-end'>
            {col}
          </div>
        ))}
      </div>
      {/* row's name and boxes */}
      <div
        id='Playerboard'
        ref={PlayerRef}
        className={`relative flex flex-col md:gap-1 z-10   ${
          !turn && !gameOver
            ? ' outline-dotted outline-red-400 outline-offset-1 rounded-sm '
            : ''
        }`}
      >
        {rows.map((row, index) => (
          <div id={row.name} key={index} className='flex gap-1 justify-center'>
            <span className='w-4'>{row.name}</span>
            {row.row.map((row, index) => {
              return (
                <div
                  key={index}
                  id={row}
                  data='undefined'
                  onDragEnter={dragEnter}
                  onDragLeaveCapture={dragLeave}
                  onTouchStart={(e) => {
                    dragEnter(e);
                    dispatch(dropShip(ship));
                  }}
                  className={`box w-4 h-4 border md:w-8 md:h-8 
                      hover:opacity-80`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerBoard;
