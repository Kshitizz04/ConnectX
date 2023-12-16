import {Box} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Box>
  );
}

export default App;
