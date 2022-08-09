import React, {useRef, useState} from 'react';
import FleetSetup from '../components/FleetSetup';
import GameBoard from '../components/GameBoard';

//5 diffrent size ships with id
// dragable ships move to board

const SinglePlayer = () => {
  const myRef = useRef(null);
  const [selected, setSelected] = useState();
  const [shipsRotate, setShipsRotate] = useState(false);
  //Fleet setup
  const [fleet, setFleet] = useState([
    'destroyer',
    'submarine',
    'torpedo',
    'fastnavy',
    'container',
  ]);

  // DRAG and DROP FUNCTİONS

  const SelectShip = (e) => {
    setSelected(e.currentTarget.id);
  };
  const ExitSelectShip = (e) => {
    console.log(e.currentTarget.id);
    setFleet([...fleet, e.currentTarget.id]);
  };

  //onDrag Enter
  const shipEnter = (e) => {
    const box = e.currentTarget;
    const detectColor = (i) => {
      //myRef is Player Board
      if (shipsRotate) {
        myRef.current.childNodes[Number(box.id) + i / 10].classList.add(
          'bg-green-500'
        );
      } else {
        myRef.current.childNodes[Number(box.id) + i].classList.add(
          'bg-green-500'
        );
      }
    };
    function detectArea(selected) {
      // Make a Green bg color when drag ship enter the board
      let arr = [];
      switch (selected) {
        case 'destroyer':
          arr = [0, 10];
          arr.map((i) => detectColor(i));
          break;
        case 'submarine':
        case 'torpedo':
          arr = [0, 10, 20];
          arr.map((i) => detectColor(i));
          break;
        case 'fastnavy':
          arr = [0, 10, 20, 30];
          arr.map((i) => detectColor(i));
          break;
        case 'container':
          arr = [0, 10, 20, 30, 40];
          arr.map((i) => detectColor(i));
      }
    }
    detectArea(selected);
  };

  //onDrag Leave
  const shipLeave = (e) => {
    myRef.current.childNodes.forEach((box) =>
      box.classList.remove('bg-green-500')
    );
    // e.currentTarget.classList.remove('bg-green-500');
  };

  return (
    <main className='bg-brand h-screen select-none'>
      <div className='GameBoards flex justify-around pt-4'>
        <GameBoard
          myRef={myRef}
          name={'Player'}
          shipEnter={shipEnter}
          shipLeave={shipLeave}
        />
        <GameBoard name={'Computer'} />
      </div>
      <div className='FleetSetup mt-5 flex flex-col items-center'>
        <FleetSetup
          fleet={fleet}
          shipsRotate={shipsRotate}
          setShipsRotate={setShipsRotate}
          SelectShip={SelectShip}
          ExitSelectShip={ExitSelectShip}
        />
      </div>
      <div className='text-white'>
        <p>shiprotate: {JSON.stringify(shipsRotate)}</p>
        <p>selected: {selected}</p>
      </div>
    </main>
  );
};

export default SinglePlayer;
