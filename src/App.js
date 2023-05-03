import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global/globalStyle.css'
import Store from './pages/store';
import GameInfo from './pages/gameinfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/gameinfo/:id' element={<GameInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
