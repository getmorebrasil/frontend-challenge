import { createTheme } from '@material-ui/core/styles';

const muiTheme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },

  components: {
    MuiModal: {
      styleOverrides: {
        root: {
          '& .MuiBackdrop-root': {
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(7px)',
          },
        },
      },

      defaultProps: {
        disablePortal: true,
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            color: '#fff',

            '& .Mui-checked': {
              color: '#fff',
            },
          },

          '& .MuiSwitch-track': {
            background: '#fff !important',
          },

          '& .Mui-checked + .MuiSwitch-track': {
            background: '#fff',
          },

          '& .MuiSwitch-thumb': {
            color: '#fff',
          },
        },
      },
    },
  },
});

export default muiTheme;
