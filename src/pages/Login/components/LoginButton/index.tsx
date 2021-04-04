import { FC, memo } from 'react';

import Button, { ButtonProps } from '@material-ui/core/Button';

import { ButtonGradient, useStyles } from './styles';

interface Props {
  gradient: ButtonGradient;
  marginTop?: number;
}

const LoginButton: FC<Props & ButtonProps> = ({
  children,
  gradient,
  marginTop = 0,
  ...restProps
}) => {
  const classes = useStyles({ marginTop, gradient });

  return (
    <Button className={classes.button} {...restProps}>
      {children}
    </Button>
  );
};

export default memo(LoginButton);
