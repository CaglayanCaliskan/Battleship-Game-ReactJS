import {Routes, Route} from 'react-router-dom';
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
      </Routes>
    </>
  );
}

export default App;
