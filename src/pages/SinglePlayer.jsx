import React from 'react';
import ComputerBoard from '../components/ComputerBoard';
import FleetSetup from '../components/FleetSetup';
import PlayerBoard from '../components/PlayerBoard';
import {useSelector} from 'react-redux';
import ScoreBoard from '../components/ScoreBoard';
import {useState, useEffect} from 'react';
import {useRef} from 'react';

const SinglePlayer = () => {
  const {game} = useSelector((state) => state.gameOptionsSlice);
  const [gameOver, SetGameOver] = useState(false);
  const [attackCount, setAttackCount] = useState(0);
  const [turn, setTurn] = useState(true);
  const [hit, setHit] = useState({ship: '', hit: false, message: ''});
  const [inGameShip, SetInGameShip] = useState(['yessssir']);
  const CompRef = useRef(null);
  const PlayerRef = useRef(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    !turn && computerAttack();
    if (inGameShip.length === 0) {
      SetGameOver(true);
    }
  }, [turn]);

  const CheckComputerBoard = () => {
    let arr = [];
    for (const box of CompRef.current.children) {
      if (box.value != undefined) {
        arr.push(box.value);
      }
      SetInGameShip(arr);
    }
    //
  };
  const CheckPlayerBoard = () => {
    // console.log(PlayerRef.current);
  };

  const attack = (e) => {
    if (turn && game) {
      setAttackCount(attackCount + 1);
      if (e.target.value) {
        setHit({
          message: 'You hit a',
          ship: e.target.value,
          hit: true,
        });
        e.target.classList = 'bg-fire-bg bg-cover border';
        e.target.value = undefined;
        setTurn(true);
        CheckComputerBoard();
      } else {
        e.target.classList.add('bg-gray-400');
        setHit({
          message: '',
          ship: '',
          hit: false,
        });
        setTurn(false);
      }
    } else {
      return;
    }
  };
  function computerAttack() {
    if (!turn && game) {
      const boxes = document.querySelectorAll('.box');
      const randomBox = boxes[getRandomInt(99)];
      setTimeout(() => {
        if (randomBox.getAttribute('data') != 'undefined') {
          randomBox.classList.remove('bg-green-600');
          randomBox.classList.add('bg-fire-bg');
          randomBox.classList.add('bg-cover');
          setHit({
            message: 'Computer hit a ',
            ship: randomBox.getAttribute('data'),
            hit: true,
          });
          CheckPlayerBoard();
        } else {
          randomBox.classList.add('bg-gray-400');
          setHit({
            message: '',
            ship: '',
            hit: false,
          });
        }

        setTurn(true);
      }, 1000);
    }
  }

  return (
    <main className='bg-brand h-screen select-none flex flex-col'>
      <div className='flex justify-around'>
        <PlayerBoard PlayerRef={PlayerRef} />
        <ComputerBoard CompRef={CompRef} attack={attack} />
      </div>
      {!game ? (
        <FleetSetup />
      ) : (
        <ScoreBoard
          gameOver={gameOver}
          attackCount={attackCount}
          turn={turn}
          hit={hit}
        />
      )}
    </main>
  );
};

export default SinglePlayer;
