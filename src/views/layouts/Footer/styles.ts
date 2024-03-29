import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: 80,
    padding: '0 30px',
    overflow: 'hidden',
  },
  title: {
    flexGrow: 1,
  },
}));
