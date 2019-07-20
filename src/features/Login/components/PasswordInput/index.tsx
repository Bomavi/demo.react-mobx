/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

/* local imports: common */
// import { useStyles } from './styles';

export interface PasswordInputProps {
	repeatPassword?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps & TextFieldProps> = ({ repeatPassword }) => {
	// const classes = useStyles();
	const id = repeatPassword ? 'repeat-password' : 'password';
	const label = repeatPassword ? 'Repeat password' : 'Password';

	return (
		<TextField
			fullWidth
			id={id}
			label={label}
			type="password"
			margin="normal"
			variant="outlined"
			// value={values.name}
			// onChange={handleChange('name')}
		/>
	);
};

export { PasswordInput };
