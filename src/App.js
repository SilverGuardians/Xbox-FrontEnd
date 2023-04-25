import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global/globalStyle.css'
import Store from './pages/store';
import NavbarVolta from './components/navbarBack';
import GameInfo from './pages/gameinfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/gameinfo' element={<GameInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
