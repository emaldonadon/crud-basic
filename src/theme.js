import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#424242',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          color: '#ffffff',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
