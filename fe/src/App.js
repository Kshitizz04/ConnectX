import {Box, CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage/index';
import LoginPage from 'pages/loginPage';
import ProfilePage from 'pages/profilePage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';
import Navbar from 'pages/navbar';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/profile/:userID' element={<ProfilePage/>} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
