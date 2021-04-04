import { FC, memo } from 'react';

import TextField, { TextFieldProps } from '@material-ui/core/TextField';

const UsernameInput: FC<TextFieldProps> = (props) => {
  return (
    <TextField
      fullWidth
      {...props}
      id="username"
      label="Username"
      autoComplete="off"
      margin="normal"
      variant="outlined"
    />
  );
};

export default memo(UsernameInput);
