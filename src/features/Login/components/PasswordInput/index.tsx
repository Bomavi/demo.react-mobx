import { FC, memo } from 'react';

import TextField, { TextFieldProps } from '@material-ui/core/TextField';

export interface PasswordInputProps {
	repeatPassword?: boolean;
}

const PasswordInput: FC<PasswordInputProps & TextFieldProps> = memo(
	({ repeatPassword, ...props }) => {
		const id = repeatPassword ? 'repeat-password' : 'password';
		const label = repeatPassword ? 'Repeat password' : 'Password';

		return (
			<TextField
				fullWidth
				{...props}
				id={id}
				label={label}
				autoComplete="off"
				type="password"
				margin="normal"
				variant="outlined"
			/>
		);
	}
);

export { PasswordInput };
