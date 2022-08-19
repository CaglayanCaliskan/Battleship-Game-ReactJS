import {useRef} from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const ComputerBoard = ({attack, CompRef}) => {
  const {game} = useSelector((state) => state.gameOptionsSlice);
  const {playerFleet} = useSelector((state) => state.fleetsSlice);
  useEffect(() => {
    resetGame();
    game && playerFleet.forEach((ship) => generateShip(ship));
  }, [game]);

  const column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const alp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let rows = [];

  for (let i = 0; i < 100; i++) {
    rows.push(i);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function checkBoxOk(number, shipSize) {
    let result = number;
    if (number % 10 === 0) {
      result += 1;
    }
    if (number % 10 === 9 && shipSize === 3) {
      result -= 1;
    }
    if (number % 10 === 8 && shipSize === 4) {
      result -= 2;
    }
    if (number % 10 === 7 && shipSize === 5) {
      result -= 3;
    }
    return result;
  }

  const resetGame = () => {
    for (const box of CompRef.current.children) {
      box.value = undefined;
      box.classList.remove('bg-fire-bg');
      box.classList.remove('bg-blue-300');
      box.classList.remove('bg-gray-400');
    }
  };

  function generateShip(ship) {
    const direction = ['horizontal', 'vertical'];
    const directionType = direction[getRandomInt(2)];

    if (directionType === 'horizontal') {
      let randomNumber = getRandomInt(96);
      let randomBoxID = checkBoxOk(randomNumber, ship.size);
      const targetBox = CompRef.current.children;
      for (let i = 0; i < ship.size; i++) {
        targetBox[randomBoxID + i - 1].classList.add('bg-blue-300');
        targetBox[randomBoxID + i - 1].value = ship.name;
      }
    } else {
      //vertical
      let randomNumber = getRandomInt(60);
      let randomBoxID = checkBoxOk(randomNumber, ship.size);
      const targetBox = CompRef.current.children;
      for (let i = 0; i < ship.size; i++) {
        targetBox[randomBoxID + i * 10].classList.add('bg-blue-300');
        targetBox[randomBoxID + i * 10].value = ship.name;
      }
    }
  }

  return (
    <div className='relative flex  flex-col gap-1 text-white mt-2'>
      <div
        className={`bg-red-200 text-brand font-bold text-center rounded w-2/3 mx-auto`}
      >
        Computer Board
      </div>
      <div className=' flex justify-end '>
        {/* column numbers */}
        {column.map((col) => (
          <div key={col} className='w-6 h-6 mr-3 text-end'>
            {col}
          </div>
        ))}
      </div>

      <div id='Computerboard' className='relative '>
        <div className='absolute flex flex-col gap-3  -left-10'>
          {alp.map((col) => (
            <div key={col} className='w-6 h-6 mr-3 text-end'>
              {col}
            </div>
          ))}
        </div>
        <div className='grid grid-cols-10 gap-1' ref={CompRef}>
          {rows.map((i) => {
            return (
              <div
                onClick={(e) => attack(e)}
                key={i}
                id={i + 1}
                value={undefined}
                className={`cbox w-8 h-8 borde  border cursor-pointer  `}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComputerBoard;
