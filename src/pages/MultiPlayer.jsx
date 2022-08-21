import React from 'react';
import {Link} from 'react-router-dom';

const MultiPlayer = () => {
  return (
    <main className='bg-brand h-screen select-none'>
      <div className='flex justify-center flex-col items-center pt-4'>
        <span className='text-white'>on Progress...</span>

        <Link
          to='/'
          className='bg-main text-white rounded-md p-2 hover:scale-95 border border-main hover:border-white transition-all'
        >
          Back
        </Link>
      </div>
      <div
        draggable
        onTouchMove={() => console.log(123)}
        className='w-10 h-10 bg-red-300 absolute left-1/2'
      ></div>
    </main>
  );
};

export default MultiPlayer;
