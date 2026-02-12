import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4081', // Pink
      contrastText: '#fff',
    },
    secondary: {
      main: '#23272f', // Black/dark
      contrastText: '#fff',
    },
    background: {
      default: '#181a1b',
      paper: '#23272f',
    },
    text: {
      primary: '#fff',
      secondary: '#b0b3b8',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h5: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'box-shadow 0.3s',
          background: '#23272f',
          color: '#fff',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(255, 64, 129, 0.15)',
          },
        },
      },
    },
  },
});

export default theme;
