import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global/globalStyle.css'
import Store from './pages/store';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Store/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
