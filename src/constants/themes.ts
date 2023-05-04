import { createTheme, styled } from '@mui/material/styles';
import { TextField, Typography } from '@mui/material';

export const theme = createTheme({
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 18,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
    },
    palette: {
        background: {
            default: '#282c34',
        },
        primary: {
            light: '#12B0E8',
            main: '#207398',
            dark: '#03203C',
        },
        text: {
            primary: "#ffffff",
            secondary: "#000000"
        }
    },
});

export const Title = styled(Typography)({
    color: '#207398',
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
    },
})
export const SearchField = styled(TextField)({
    width: '90%',
    alignContent: 'flex-end',
    fontWeight: 500,
    color: '#207398',

    input: {
        color: '#ffffff',
    },
})
