/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import Button, { ButtonProps } from '@material-ui/core/Button';

/* local imports: common */
import { useStyles } from './styles';

export interface LoginButtonProps {
	gradient: 'primary' | 'secondary';
}

const LoginButton: React.FC<LoginButtonProps & ButtonProps> = ({
	children,
	gradient,
	...props
}) => {
	const classes = useStyles({ gradient });

	return (
		<Button className={classes.button} {...props}>
			{children}
		</Button>
	);
};

export { LoginButton };
