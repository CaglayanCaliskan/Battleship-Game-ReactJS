import React from 'react';
import {MdOutlineCropRotate} from 'react-icons/md';
import {useSelector} from 'react-redux/es/exports';

const FleetSetup2 = () => {
  const {fleet} = useSelector((state) => state.fleetsSlice);
  console.log(fleet);
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white text-center text-xl select-none'>
        Locate Your Ships...
      </h1>
      <div className=' bg-red-500 rounded-full text-white p-1 cursor-pointer active:rotate-90 hover:bg-white hover:text-red-500 transition-all'>
        <MdOutlineCropRotate
          size={30}
          className=' rounded flex items-center justify-center'
        />
      </div>
      <div className='flex justify-center'>
        {fleet.map((ship) => {
          return <div>{ship.name}</div>;
        })}
      </div>
    </div>
  );
};

export default FleetSetup2;
