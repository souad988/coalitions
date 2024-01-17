import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './views/home';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 900,
      color: '#414F6B',
      fontSize: '3rem', // Default font size for all screens
      '@media (min-width:600px)': {
        fontSize: '6rem', // Font size for screens larger than 600px (tablet and up)
      },
      '@media (min-width:1024px)': {
        fontSize: '8rem', // Font size for screens larger than 1024px (desktop and up)
      },
    },
    h1Secondary: {
      fontWeight: 900,
      color: '#4D4D4D', // Second color
      fontSize: '3rem', // Default font size for all screens
      '@media (min-width:600px)': {
        fontSize: '6rem', // Font size for screens larger than 600px (tablet and up)
      },
      '@media (min-width:1024px)': {
        fontSize: '8rem', // Font size for screens larger than 1024px (desktop and up)
      },
      margin: 0,
    },
    h4: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 900,
      color: '#4D4D4D',
    },
  },
  palette: {
    mode: 'light',
    blue: {
      dark: '#414F6B',
      light: '#63769D',
    },
    grey: {
      dark: '#4D4D4D',
      light: '#AFB3BD',
    },
    link: {
      light: '#FFFFFF',
      dark: '#414F6B',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </ThemeProvider>
);

export default App;
