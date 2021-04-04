import { FC, memo } from 'react';

import TextField, { TextFieldProps } from '@material-ui/core/TextField';

interface Props {
  repeatPassword?: boolean;
}

const PasswordInput: FC<Props & TextFieldProps> = ({
  repeatPassword,
  ...restProps
}) => {
  const id = repeatPassword ? 'repeat-password' : 'password';
  const label = repeatPassword ? 'Repeat password' : 'Password';

  return (
    <TextField
      fullWidth
      {...restProps}
      id={id}
      label={label}
      autoComplete="off"
      type="password"
      margin="normal"
      variant="outlined"
    />
  );
};

export default memo(PasswordInput);
