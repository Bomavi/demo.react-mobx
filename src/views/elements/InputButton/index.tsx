/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

/* local imports: common */
import { useStyles } from './styles';

interface InputButtonProps {
	disabled?: boolean;
	isFetching?: boolean;
	onClick?: () => void;
}

const InputButton: React.FC<InputButtonProps> = ({
	children,
	disabled,
	onClick,
	isFetching = false,
}) => {
	const classes = useStyles();

	if (isFetching) {
		return (
			<div className={classes.root}>
				<CircularProgress size={18} thickness={4} color="inherit" />
			</div>
		);
	}

	if (!onClick && children) {
		return <div className={classes.root}>{children}</div>;
	}

	return (
		<div className={classes.root}>
			<IconButton className={classes.iconButton} disabled={disabled} onClick={onClick}>
				{children}
			</IconButton>
		</div>
	);
};

export { InputButton };
