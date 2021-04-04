import { FC, memo } from 'react';
import cx from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import Icon, { IconProps } from 'views/elements/Icon';

import { useStyles } from './styles';

interface Props {
  icon: IconProps;
  title?: string;
  disabled?: boolean;
  isFetching?: boolean;
  color?: 'primary' | 'secondary' | 'inherit';
  onClick?: () => void;
}

const InputButton: FC<Props> = ({
  icon: { name: iconName, svgSize = 'sm' },
  title,
  disabled,
  isFetching = false,
  color = 'inherit',
  onClick,
}) => {
  const classes = useStyles();

  if (isFetching) {
    return (
      <div className={classes.root}>
        <CircularProgress size={18} thickness={4} color="inherit" />
      </div>
    );
  }

  if (!onClick) {
    return (
      <div className={classes.root}>
        <Icon name={iconName} size="sm" svgSize={svgSize} />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <IconButton
        className={cx(classes.iconButton, color)}
        title={title}
        color={color}
        disabled={disabled}
        onClick={onClick}
      >
        <Icon name={iconName} size="sm" svgSize={svgSize} />
      </IconButton>
    </div>
  );
};

export default memo(InputButton);
