import React from 'react';
import {useSelector} from 'react-redux';

const ShipModel2 = ({size}) => {
  const {rotate} = useSelector((state) => state.gameOptionsSlice);
  const shipSize = [];

  for (let i = 0; i < size; i++) {
    shipSize.push(i);
  }
  return (
    <div className={`flex gap-1 ${!rotate ? 'flex-col' : ''}`}>
      {shipSize.map((box) => (
        <div key={box} className='w-8 h-8 border  border-y-yellow-300'></div>
      ))}
    </div>
  );
};

export default ShipModel2;
