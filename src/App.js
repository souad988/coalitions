import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './views/home';

const theme = createTheme({
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
