import { FC, memo } from 'react';

import IconButton from '@material-ui/core/IconButton';

import { Icon } from 'views/elements';

import { useStyles } from './styles';

export interface SortButtonProps {
	sortKey: SortKey;
	disabled?: boolean;
	onClick: () => void;
}

const SortButton: FC<SortButtonProps> = memo(({ sortKey, disabled, onClick }) => {
	const classes = useStyles();

	const isAsc = sortKey === 'asc';
	const isDesc = sortKey === 'desc';

	const newFirstTitle = 'Recently created first';
	const oldFirstTitle = 'Oldest first';

	return (
		<div className={classes.root}>
			<IconButton
				title={isDesc ? oldFirstTitle : newFirstTitle}
				disabled={disabled}
				onClick={onClick}
			>
				{isAsc && <Icon name="sort-ascending" />}
				{isDesc && <Icon name="sort-descending" />}
			</IconButton>
		</div>
	);
});

export { SortButton };
