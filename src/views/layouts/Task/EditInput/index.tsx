/* npm imports: common */
import React from 'react';

/* root imports: view components */
import { CustomInput, CustomInputProps } from 'views/elements';

/* local imports: common */
import { useStyles } from './styles';

export interface EditInputProps extends Partial<CustomInputProps> {}

const EditInput: React.FC<EditInputProps> = props => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CustomInput iconName="check" {...props} />
		</div>
	);
};

export { EditInput };
