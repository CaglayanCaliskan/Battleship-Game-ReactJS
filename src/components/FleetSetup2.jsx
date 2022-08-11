import React from 'react';
import {MdOutlineCropRotate} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {dragStart} from '../features/fleetsSlice';
import {setRotate} from '../features/gameOptionsSlice';
import ShipModel2 from './ShipModel2';

const FleetSetup2 = () => {
  const {playerFleet} = useSelector((state) => state.fleetsSlice);
  const dispatch = useDispatch();
  return (
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
      <div className='flex justify-center gap-4'>
        {playerFleet.map((ship) => {
          return (
            <div
              onDragStart={() => dispatch(dragStart(ship))}
              onDragEnd={() => console.log('ondrag end')}
              draggable
              key={ship.id}
              className={`text-white w-fit h-fit  `}
            >
              <ShipModel2 size={ship.size} />
            </div>
          );
        })}
      </div>
      <div className='text-white'>
        <p>{JSON.stringify(playerFleet)}</p>
      </div>
    </div>
  );
};

export default FleetSetup2;
