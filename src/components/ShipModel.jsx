import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dragShip} from '../features/fleetsSlice';
import {dropShip} from '../features/fleetsSlice';

const ShipModel = ({ship}) => {
  const dispatch = useDispatch();
  const {rotate} = useSelector((state) => state.gameOptionsSlice);
  const shipSize = [];

  for (let i = 0; i < ship.size; i++) {
    shipSize.push(i);
  }
  return (
    !ship.onBoard && (
      <div
        draggable
        onDragStart={() => {
          dispatch(dragShip(ship));
        }}
        onDragEnd={() => dispatch(dropShip(ship))}
        key={ship.id}
        className={`text-white w-fit h-fit `}
      >
        <div className={`flex gap-1 ${!rotate ? 'flex-col' : ''}`}>
          {shipSize.map((box) => (
            <div key={box} className='w-8 h-8 border  border-yellow-300'></div>
          ))}
        </div>
      </div>
    )
  );
};

export default ShipModel;
