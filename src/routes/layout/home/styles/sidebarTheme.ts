import { createTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';
import rootTheme from '../../../../shared/config/theme';

export const sidebarTheme = createTheme({
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
            disabled: Colors.blue[500],
            hint: Colors.grey[500],
        },
    },
    props: {
        MuiListItem: {
            className: 'sidebar-list-item',
        },
        MuiListItemText: {
            className: 'sidebar-list-item-text',
        },
        MuiListItemIcon: {
            className: 'sidebar-list-item-icon',
        },
    },
    overrides: {
        MuiListItemIcon: {
            root: {
                color: Colors.grey[500],
            },
        },
        MuiListItem: {
            root: {
                '&$selected': {
                    backgroundColor: Colors.grey[800],
                },
                '&$selected .sidebar-list-item-text': {
                    color: Colors.grey[500],
                },
                '&.sidebar-list-item:hover': {
                    color: Colors.grey[500],
                },
                // '&.sidebar-list-item-icon:hover': {
                //     color: Colors.orange[500],
                // },
            },
        },
    },
});
