import React from 'react';
import {MdOutlineCropRotate} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {setRotate} from '../features/gameOptionsSlice';
import ShipModel2 from './ShipModel';
import {useRef} from 'react';
import {resetFleet} from '../features/fleetsSlice';
import {setGameStart} from '../features/gameOptionsSlice';

const FleetSetup = () => {
  const {playerFleet} = useSelector((state) => state.fleetsSlice);
  const {game} = useSelector((state) => state.gameOptionsSlice);
  const dispatch = useDispatch();
  const myRef = useRef(null);

  return !game ? (
    <div className='flex flex-col items-center gap-2 mt-4'>
      <h1 className='text-white text-center text-xl select-none'>
        Locate Your Ships...
      </h1>
      <div className=' bg-red-500 rounded-full text-white p-1 cursor-pointer active:rotate-90 hover:bg-white hover:text-red-500 transition-all'>
        <MdOutlineCropRotate
          onClick={() => dispatch(setRotate())}
          size={30}
          className=' rounded flex items-center justify-center'
        />
      </div>
      {/* ship models */}
      {
        <div ref={myRef} className='flex gap-4'>
          {playerFleet.map((ship) => (
            <ShipModel2 key={ship.id} ship={ship} />
          ))}
        </div>
      }

      {/* control */}
      {playerFleet.every((ship) => ship.onBoard === true) && (
        <div
          onClick={() => dispatch(setGameStart())}
          className=' mt-4 bg-green-900 p-6  rounded-lg text-white cursor-pointer active:scale-95 hover:bg-white hover:text-red-500 transition-all'
        >
          Start
        </div>
      )}
      {playerFleet.find((ship) => ship.onBoard === true) && (
        <div
          onClick={() => dispatch(resetFleet())}
          className=' mt-4 bg-red-900 p-3 rounded-lg text-white cursor-pointer active:scale-95 hover:bg-white hover:text-red-500 transition-all'
        >
          Reset
        </div>
      )}
    </div>
  ) : (
    <div className='flex flex-col items-center gap-2 mt-4 text-white'>
      Game Score
    </div>
  );
};

export default FleetSetup;
