/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

/* local imports: common */
// import { useStyles } from './styles';

const UsernameInput: React.FC<TextFieldProps> = () => {
	// const classes = useStyles();

	return (
		<TextField
			fullWidth
			id="username"
			label="Username"
			margin="normal"
			variant="outlined"
			// value={values.name}
			// onChange={handleChange('name')}
		/>
	);
};

export { UsernameInput };
