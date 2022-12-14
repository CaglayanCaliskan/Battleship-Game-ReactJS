import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex items-end justify-center h-screen w-full  bg-center   bg-no-repeat  bg-naval-bg  bg-brand'>
      <div className='flex flex-col gap-6 items-center p-6 mb-10  md:mb-48'>
        <h1 className='md:text-5xl font-main2-font-font font-bold  text-white '>
          Battleship Game
        </h1>

        <div className='flex gap-2'>
          <Link
            to='singleplayer'
            className='bg-main text-white rounded-md p-2 hover:scale-95 border border-main hover:border-white transition-all'
          >
            Single Player
          </Link>
          <Link
            to='multiplayer'
            className='bg-main text-white rounded-md p-2 hover:scale-95 border border-main hover:border-white transition-all'
          >
            Multiplayer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
