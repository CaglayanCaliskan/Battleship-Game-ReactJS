import React, {useEffect, useState} from 'react';

const SinglePlayer = () => {
  const [attack, setAttack] = useState([]);
  const emptyBoard = [];
  const selected = [12, 14];

  function starter() {
    for (let i = 0; i < 100; i++) {
      emptyBoard.push(i + 1);
    }
  }
  starter();

  //Attack function
  const perAttack = (e) => {
    const target = Number(e.currentTarget.dataset.coordinat);
    setAttack([...attack, Number(e.currentTarget.dataset.coordinat)]);
    if (selected.includes(target)) {
      e.currentTarget.classList.add('bg-fire-bg');
    } else {
      e.currentTarget.classList.add('bg-blue-500');
    }
  };

  return (
    <div className='bg-brand h-screen w-full grid grid-rows-2 text-white'>
      <div className='relative border flex justify-center items-center'>
        <div className=' absolute right-10 h-full w-48 '>
          <h1>board:</h1>
          <div className='border h-full relative'>
            <div
              onDragStart={(e) => {
                e.dataTransfer.setData('test', e.target.dataset);

                console.log(e.dataTransfer);
              }}
              draggable
              className='gemi absolute flex gap-1 m-2'
            >
              <div className='border border-red-500 w-9 h-9'></div>
              <div className='border border-red-500 w-9 h-9'></div>
              <div className='border border-red-500 w-9 h-9'></div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-10  '>
          {emptyBoard.map((box) => {
            return (
              <div
                onDragEnter={(e) => e.preventDefault()}
                onClick={(e) => perAttack(e)}
                data-ship='var'
                className={`border bg-cover select-none cursor-pointer w-10 h-10 `}
                data-coordinat={box}
                key={box}
              ></div>
            );
          })}
        </div>
      </div>
      <div className='border'>2</div>
    </div>
  );
};

export default SinglePlayer;
