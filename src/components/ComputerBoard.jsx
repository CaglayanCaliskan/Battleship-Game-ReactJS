import {useRef} from 'react';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const ComputerBoard = ({attack, CompRef, turn}) => {
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
        targetBox[randomBoxID + i - 1].value = ship.name;
      }
    } else {
      //vertical
      let randomNumber = getRandomInt(60);
      let randomBoxID = checkBoxOk(randomNumber, ship.size);
      const targetBox = CompRef.current.children;
      for (let i = 0; i < ship.size; i++) {
        targetBox[randomBoxID + i * 10].value = ship.name;
      }
    }
  }

  return (
    <div className=''>
      <div className='relative flex ml-4  flex-col gap-0 md:gap-1 text-white md:mt-2 text-sm md:text-base '>
        <div
          className={`bg-red-200 absolute md:relative -left-28 md:left-0 md:top-0 top-28 -rotate-90 md:rotate-0 text-brand font-bold text-center rounded w-36 md:w-2/3 p-1 md:p-0 mx-auto `}
        >
          Computer Board
        </div>
        <div className=' flex justify-center gap-3.5 md:gap-7  '>
          {/* column numbers */}
          {column.map((col) => (
            <div key={col} className=''>
              {col}
            </div>
          ))}
        </div>

        <div id='Computerboard' className='relative '>
          <div className='absolute -left-4  flex flex-col  md:gap-3 md:-left-6   '>
            {alp.map((col) => (
              <div key={col} className='text-end '>
                {col}
              </div>
            ))}
          </div>
          <div
            className={` grid place-items-center w-52 mx-auto items-center md:ml-0 md:w-full grid-cols-10 gap-1 ${
              turn && game
                ? 'outline outline-green-400 outline-offset-1 rounded-sm '
                : ''
            } `}
            ref={CompRef}
          >
            {rows.map((i) => {
              return (
                <div
                  onClick={(e) => attack(e)}
                  key={i}
                  id={i + 1}
                  value={undefined}
                  className={`cbox w-4 h-4 md:w-8 md:h-8 borde  border cursor-pointer  `}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerBoard;
