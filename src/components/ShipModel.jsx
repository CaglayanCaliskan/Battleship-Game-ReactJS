import React from 'react';

const ShipModel = ({shipsRotate, shipname, SelectShip}) => {
  let shipWidth = [];
  switch (shipname) {
    case 'destroyer':
      generateShipBox(shipWidth, 2);
      break;
    case 'submarine':
      generateShipBox(shipWidth, 3);
      break;

    case 'torpedo':
      generateShipBox(shipWidth, 3);
      break;

    case 'fastnavy':
      generateShipBox(shipWidth, 4);
      break;

    case 'container':
      generateShipBox(shipWidth, 5);
      break;
    default:
      generateShipBox(shipWidth, 1);
  }

  function generateShipBox(shipWidth, bar) {
    for (let i = 0; i < bar; i++) {
      shipWidth.push(i);
    }
  }

  function shipBar(index) {
    return (
      <div
        key={(shipname, index)}
        id={shipname[0] + index}
        className='border border-yellow-500 w-8 h-8'
      ></div>
    );
  }

  return (
    <div
      draggable
      onDrag={(e) => SelectShip(e)}
      //   onDragLeave={(e) => ExitSelectShip(e)}
      id={shipname}
      className={`${
        shipsRotate ? '' : 'flex-col'
      } flex gap-1 m-2 w-fit relative h-fit`}
    >
      {shipWidth.map((index) => shipBar(index))}
    </div>
  );
};

export default ShipModel;
