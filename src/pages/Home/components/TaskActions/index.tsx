import { FC, memo } from 'react';
import cx from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import Icon from 'views/elements/Icon';

import { useStyles } from './styles';

interface Props {
	disabled?: boolean;
	isFetching?: boolean;
	onEdit: () => void;
	onDelete?: () => void;
}

const TaskActions: FC<Props> = ({
	children,
	disabled,
	isFetching = false,
	onDelete,
	onEdit,
}) => {
	const classes = useStyles();

	if (isFetching) {
		return (
			<div className={cx(classes.root, 'small')}>
				<CircularProgress size={18} thickness={4} color="inherit" />
			</div>
		);
	}

	if (!onDelete && children) {
		return <div className={classes.root}>{children}</div>;
	}

	return (
		<div className={classes.root}>
			<div className={classes.iconButtonWrapper}>
				<IconButton
					className={classes.iconButton}
					disabled={disabled || isFetching}
					title="Edit"
					onClick={onEdit}
				>
					<Icon name="pencil" size="sm" />
				</IconButton>
			</div>
			<div className={classes.iconButtonWrapper}>
				<IconButton
					className={classes.iconButton}
					disabled={disabled || isFetching}
					title="Delete"
					onClick={onDelete}
				>
					<Icon name="delete" size="sm" />
				</IconButton>
			</div>
		</div>
	);
};

export default memo(TaskActions);
