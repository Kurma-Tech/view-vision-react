import { createTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';
import rootTheme from '../../../shared/config/theme';

export const authTheme = createTheme({
    ...rootTheme,
    palette: {
        primary: {
            light: Colors.blue[300],
            main: Colors.blue[600],
            dark: Colors.blue[900],
            contrastText: Colors.blue[50],
        },
        secondary: {
            light: '#fff',
            main: Colors.grey[500],
            dark: 'rgba(29, 28, 28, 1)',
            contrastText: '#fff',
        },
        text: {
            primary: Colors.blue[50],
            secondary: Colors.grey[500],
            disabled: Colors.grey[500],
            hint: Colors.grey[500],
        },
    },
    overrides: {
        MuiOutlinedInput: {
            root: {
                '& $notchedOutline': {
                    borderColor: '#fff!important',
                },
                '& $focused': {
                    borderColor: 'red!important',
                },
            },
        },
        MuiFormLabel: {
            root: {
                '&.Mui-focused': {
                    color: Colors.grey[500],
                },
            },
        },
    },
});
