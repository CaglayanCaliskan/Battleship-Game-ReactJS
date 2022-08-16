import {useEffect} from 'react';

const ComputerBoard = () => {
  const column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const alp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push(i);
  }

  return (
    <div className='relative flex  flex-col gap-1 text-white mt-2'>
      <div
        className={`bg-red-200 text-brand font-bold text-center rounded w-2/3 mx-auto`}
      >
        Computer Board
      </div>
      <div className=' flex justify-end '>
        {/* column numbers */}
        {column.map((col) => (
          <div key={col} className='w-6 h-6 mr-3 text-end'>
            {col}
          </div>
        ))}
      </div>

      <div
        id='Computerboard'
        className='relative  grid grid-cols-10 gap-1 z-10'
      >
        <div className='absolute flex flex-col gap-3  -left-10'>
          {alp.map((col) => (
            <div key={col} className='w-6 h-6 mr-3 text-end'>
              {col}
            </div>
          ))}
        </div>
        {rows.map((i) => {
          return (
            <div
              key={i}
              id={i}
              data='undefined'
              className={`box w-8 h-8 borde  border cursor-pointer  `}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ComputerBoard;
