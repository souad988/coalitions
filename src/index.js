import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const theme = createTheme({
  typography: {
    fontFamily: 'Oswald, sans-serif',
    h1: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 900,
      color: '#414F6B',
      fontSize: '4.5rem', // Default font size for all screens
      '@media (min-width:600px)': {
        fontSize: '6.5rem', // Font size for screens larger than 600px (tablet and up)
      },
      '@media (min-width:1024px)': {
        fontSize: '8.5rem', // Font size for screens larger than 1024px (desktop and up)
      },
    },
    h1Secondary: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 900,
      color: '#4D4D4D', // Second color
      fontSize: '4rem', // Default font size for all screens
      '@media (min-width:600px)': {
        fontSize: '6rem', // Font size for screens larger than 600px (tablet and up)
      },
      '@media (min-width:1024px)': {
        fontSize: '8rem', // Font size for screens larger than 1024px (desktop and up)
      },
      margin: 0,
    },
    h1Counter: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 900,
      color: '#AFB3BD', // Second color
      fontSize: '4rem', // Default font size for all screens
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
      color: '#414F6B',
      fontSize: '2rem', // Default font size for all screens
      '@media (min-width:600px)': {
        fontSize: '3rem', // Font size for screens larger than 600px (tablet and up)
      },
      '@media (min-width:1024px)': {
        fontSize: '3rem', // Font size for screens larger than 1024px (desktop and up)
      },
    },
    body: {
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);

reportWebVitals();
