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
        onClick={() => dispatch(dragShip(ship))}
        onDragStart={() => {
          dispatch(dragShip(ship));
        }}
        onDragEnd={() => dispatch(dropShip(ship))}
        onTouchStart={() => dispatch(dragShip(ship))}
        key={ship.id}
        className={`text-white w-fit h-fit `}
      >
        <div
          className={`flex gap-1 ${!rotate ? 'flex-col' : ''} ${
            ship.selected ? 'outline outline-green-500 p-1' : ''
          }`}
        >
          {shipSize.map((box) => (
            <div
              key={box}
              className={`w-4 h-4 md:w-8 md:h-8 border  border-yellow-300`}
            ></div>
          ))}
        </div>
      </div>
    )
  );
};

export default ShipModel;
