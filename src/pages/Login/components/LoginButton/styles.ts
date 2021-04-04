import { makeStyles } from '@material-ui/core/styles';

export type ButtonGradient = 'primary' | 'secondary';

interface StyleProps {
  gradient: ButtonGradient;
  marginTop: number;
}

export const useStyles = makeStyles((theme) => ({
  button: (p: StyleProps) => ({
    height: 48,
    padding: '0 30px',
    marginTop: p.marginTop,
    border: 0,
    background: theme.gradients[p.gradient],
    boxShadow: '0 3px 5px 2px rgba(0,0,0, 0.1)',
    color: 'white',
  }),
}));
