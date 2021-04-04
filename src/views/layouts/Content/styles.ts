import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    width: '100%',
    paddingTop: 30,
    paddingBottom: theme.sizes.footer + 30,
  },
  toolbar: theme.mixins.toolbar,
}));
