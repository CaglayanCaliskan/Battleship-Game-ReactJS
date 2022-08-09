import React, {useState} from 'react';
import {MdOutlineCropRotate} from 'react-icons/md';

import ShipModel from './ShipModel';

const FleetSetup = ({
  fleet,
  shipsRotate,
  setShipsRotate,
  SelectShip,
  ExitSelectShip,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white text-center text-xl select-none'>
        Locate Your Ships...
      </h1>
      <div
        onClick={() => setShipsRotate(!shipsRotate)}
        className=' bg-red-500 rounded-full text-white p-1 cursor-pointer active:rotate-90 hover:bg-white hover:text-red-500 transition-all'
      >
        <MdOutlineCropRotate
          size={30}
          className=' rounded flex items-center justify-center'
        />
      </div>
      <div className='flex justify-center'>
        {fleet.map((ship, index) => {
          return (
            <ShipModel
              key={index}
              shipsRotate={shipsRotate}
              shipname={ship}
              SelectShip={SelectShip}
              ExitSelectShip={ExitSelectShip}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FleetSetup;
