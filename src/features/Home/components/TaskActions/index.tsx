/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

/* root imports: view components */
import { Icon } from 'views/elements';

/* local imports: common */
import { useStyles } from './styles';

export interface TaskActionsProps {
	disabled?: boolean;
	isFetching?: boolean;
	onClick?: () => void;
	onEdit: () => void;
}

const TaskActions: React.FC<TaskActionsProps> = ({
	children,
	disabled,
	onClick,
	onEdit,
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
			<div className={classes.iconButtonWrapper}>
				<IconButton className={classes.iconButton} disabled={disabled} onClick={onEdit}>
					<Icon name="pencil" size="sm" />
				</IconButton>
			</div>
			<div className={classes.iconButtonWrapper}>
				<IconButton className={classes.iconButton} disabled={disabled} onClick={onClick}>
					<Icon name="delete" size="sm" />
				</IconButton>
			</div>
		</div>
	);
};

export { TaskActions };
