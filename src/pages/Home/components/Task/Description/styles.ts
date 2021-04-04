import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  typography: {
    flexGrow: 1,
    flexShrink: 2,
    width: '100%',
    padding: '0 20px',

    '&.completed': {
      textDecoration: 'line-through',
    },
  },
}));
