import React from 'react';

const GameBoard = ({name, shipEnter, shipLeave, myRef}) => {
  let emptyBoard = [];
  let box = 0;
  function fillBoard() {
    while (box < 100) {
      emptyBoard.push(box);
      box++;
    }
  }
  fillBoard();

  return (
    <div id={name + 'board'} className='text-center'>
      <div
        className={`${
          name === 'Computer' ? 'bg-red-300' : 'bg-green-300'
        } rounded mb-4`}
      >
        <h1>{name} Board</h1>
      </div>
      <div className='grid grid-cols-10 gap-1 ' ref={myRef}>
        {emptyBoard &&
          emptyBoard.map((box) => {
            return (
              <div
                onDragEnter={(e) => shipEnter(e)}
                onDragLeave={(e) => shipLeave(e)}
                data-ship='var'
                className={`border ${
                  name === 'Player' ? 'bg-blue-200 hover:bg-blue-300' : ''
                }  bg-cover select-none  w-8 h-8`}
                data-coordinat={box}
                key={box}
                id={box}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default GameBoard;

{
  /* <div id='your-board' className='text-center'>
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
        </div> */
}
