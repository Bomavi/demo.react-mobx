import { FC } from 'react';
import cx from 'classnames';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

interface Props {
  completed: boolean;
}

const Description: FC<Props> = ({ children, completed }) => {
  const classes = useStyles();

  return (
    <Typography
      noWrap
      className={cx(classes.typography, { completed })}
      title={String(children)}
      variant="body1"
    >
      {children}
    </Typography>
  );
};

export default Description;
