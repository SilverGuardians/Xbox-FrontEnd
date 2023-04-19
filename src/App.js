import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global/globalStyle.css'
import Store from './pages/store';
import NavbarVolta from './components/navbarVolta';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarVolta/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
