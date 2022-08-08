import React, {useEffect, useState} from 'react';
import {MdOutlineCropRotate} from 'react-icons/md';

//5 diffrent size ships with id
// dragable ships move to board

const SinglePlayer = () => {
  const [emptyBoard, setEmptyBoard] = useState([]);
  const [shipsRotate, setShipsRotate] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    createBoard();
  }, []);

  const createBoard = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(i + 1);
    }
    setEmptyBoard(arr);
  };

  // DRAG and DROP FUNCTİONS

  const setShipSelect = (e) => {
    setSelected(e.currentTarget);
  };

  const shipEnter = (e) => {
    e.currentTarget.classList.add('bg-green-500');
    console.log(selected);
  };
  const shipLeave = (e) => {
    e.currentTarget.classList.remove('bg-green-500');
  };

  return (
    <main className='bg-brand h-screen select-none'>
      <div className='flex justify-around pt-4'>
        <div id='your-board' className='text-center'>
          <div className='bg-green-300 rounded mb-4'>
            <h1>Your Board</h1>
          </div>
          <div className='grid grid-cols-10 gap-1 '>
            {emptyBoard &&
              emptyBoard.map((box) => {
                return (
                  <div
                    onDragEnter={shipEnter}
                    onDragLeave={shipLeave}
                    data-ship='var'
                    className={`border bg-blue-200 hover:bg-blue-300 bg-cover select-none  w-8 h-8`}
                    data-coordinat={box}
                    key={box}
                    id={box}
                  ></div>
                );
              })}
          </div>
        </div>
        <div id='computer-board' className='text-center'>
          <div className='bg-red-300 rounded mb-4'>
            <h1>Computer Board</h1>
          </div>
          <div className='grid grid-cols-10 gap-1 '>
            {emptyBoard &&
              emptyBoard.map((box) => {
                return (
                  <div
                    data-ship='var'
                    className={`border bg-cover select-none cursor-pointer w-8 h-8`}
                    data-coordinat={box}
                    key={box}
                    id={box}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
      <div className=' mt-5 flex flex-col items-center'>
        <h1 className='text-white text-center text-xl select-none'>
          Locate Your Ships...
        </h1>
        <div
          onClick={() => setShipsRotate(!shipsRotate)}
          className='bg-red-500 rounded-full text-white p-1 cursor-pointer active:rotate-90 hover:bg-white hover:text-red-500'
        >
          <MdOutlineCropRotate
            size={30}
            className=' rounded flex items-center justify-center'
          />
        </div>

        <div className={` flex justify-center`}>
          <div
            draggable
            id='test'
            className={`${
              shipsRotate ? '' : 'flex-col'
            } flex gap-1 m-2 w-fit relative h-fit`}
            onDragStart={setShipSelect}
          >
            <div className='border border-yellow-500 w-8 h-8'></div>
          </div>
          <div
            draggable
            id='destroyer'
            className={`${
              shipsRotate ? '' : 'flex-col'
            } flex gap-1 m-2 w-fit relative h-fit`}
            onDragStart={setShipSelect}
          >
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
          </div>
          <div
            id='submarine'
            draggable
            className={`${
              shipsRotate ? '' : 'flex-col'
            } flex gap-1 m-2 w-fit relative h-fit`}
            onDragStart={setShipSelect}
          >
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
          </div>
          <div
            id='cruiser'
            draggable
            className={`${
              shipsRotate ? '' : 'flex-col'
            } flex gap-1 m-2 w-fit relative h-fit`}
            onDragStart={setShipSelect}
          >
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
          </div>
          <div
            id='battleship'
            draggable
            className={`${
              shipsRotate ? '' : 'flex-col'
            } flex gap-1 m-2 w-fit relative h-fit`}
            onDragStart={setShipSelect}
          >
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
          </div>
          <div
            id='carrier'
            draggable
            className={`${
              shipsRotate ? '' : 'flex-col'
            } flex gap-1 m-2 w-fit relative h-fit`}
            onDragStart={setShipSelect}
          >
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
            <div className='border border-yellow-500 w-8 h-8'></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SinglePlayer;
