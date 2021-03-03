import { FC, memo } from 'react';

import Button, { ButtonProps } from '@material-ui/core/Button';

import { useStyles } from './styles';

export interface LoginButtonProps {
	gradient: 'primary' | 'secondary';
	marginTop?: number;
}

const LoginButton: FC<LoginButtonProps & ButtonProps> = memo(
	({ children, gradient, marginTop = 0, ...props }) => {
		const classes = useStyles({ marginTop, gradient });

		return (
			<Button className={classes.button} {...props}>
				{children}
			</Button>
		);
	}
);

export { LoginButton };
