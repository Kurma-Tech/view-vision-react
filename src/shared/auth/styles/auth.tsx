import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    authPanelWarapper: {
        backgroundColor: 'rgba(221, 221, 221, 0.6)',
        color: '#444',
        maxWidth: 504,
        borderRadius: 4,
        '& input': {
            color: '#555',
            textShadow: '0 1px #FFF',
            border: '2px solid transparent',
            borderRadius: '4px',
            outline: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
    },
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        color: 'black',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1, 0, 1),
        color: 'black',
    },
    textfield: {
        margin: theme.spacing(1, 0, 1),
        backgroundColor: 'var(--text-filed-color)',
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        backgroundColor: 'var(--button-submit-color)',
        '&:hover': {
            backgroundColor: 'var(--button-submit-color)',
        },
    },
    multilineColor: {
        color: 'var(--text-multiline-color)',
    },
    signRegisterColor: {
        color: 'var(--sign-register-color)',
    },
    tabs: {
        margin: theme.spacing(1, 0, 1),
        padding: 0,
        height: 42,
        minHeight: 42,
        backgroundColor: 'var(--text-filed-color)',
        '& button': {
            textDecoration: 'none',
        },
    },
    tab: {
        height: 42,
        minHeight: 42,
    },
}));
