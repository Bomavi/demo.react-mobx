import { FC, memo } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles';

interface Props {
  value: boolean;
  disabled?: boolean;
  isFetching?: boolean;
  onChange: () => void;
}

const TaskCheckbox: FC<Props> = ({
  value,
  disabled,
  isFetching = false,
  onChange,
}) => {
  const classes = useStyles();

  if (isFetching) {
    return (
      <div className={classes.root}>
        <CircularProgress size={18} thickness={4} color="inherit" />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Checkbox
        checked={value}
        color="primary"
        title={value ? 'Uncomplete' : 'Complete'}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default memo(TaskCheckbox);
