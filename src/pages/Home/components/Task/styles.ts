import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 60,
    marginBottom: 10,
    backgroundColor: theme.palette.background.default,
    borderRadius: 4,

    '&.isLastChild': {
      marginBottom: 0,
    },
  },
  divider: {
    width: 1,
    height: 30,
    margin: '15px 0',
  },
}));
