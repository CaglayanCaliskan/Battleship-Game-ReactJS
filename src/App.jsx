import {Routes, Route, Link} from 'react-router-dom';
import Deneme from './pages/Deneme';
import Home from './pages/Home';
import MultiPlayer from './pages/MultiPlayer';
import SinglePlayer from './pages/SinglePlayer';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singleplayer' element={<SinglePlayer />} />
        <Route path='/multiplayer' element={<MultiPlayer />} />
        <Route path='/deneme' element={<Deneme />} />
      </Routes>
    </>
  );
}

export default App;
