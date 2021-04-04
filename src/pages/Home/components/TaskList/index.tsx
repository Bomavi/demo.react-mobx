import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useHomeStore } from '../../store';
import Task from '../Task';
import SortButton from '../SortButton';

import { SPRING_TRANSITION } from './constants';
import { useStyles } from './styles';

const TaskList: FC = () => {
	const classes = useStyles();

	const {
		sortedByComplete,
		isEmpty,
		tasksLength,
		sortKey,
		searchTasks,
		sortTasks,
	} = useHomeStore();

	useEffect(() => {
		searchTasks();
	}, [searchTasks]);

	const sortTasksHandler = () => {
		if (sortKey === 'asc') sortTasks('desc');
		if (sortKey === 'desc') sortTasks('asc');
	};

	return (
		<Paper className={classes.root}>
			<div className={classes.header}>
				<Typography className={classes.title} noWrap variant="subtitle2">
					Task List &nbsp;&nbsp;
					{!isEmpty && '|'}
					&nbsp;&nbsp;&nbsp;
					{!isEmpty && `${tasksLength}`}
				</Typography>
				<SortButton
					sortKey={sortKey}
					disabled={isEmpty}
					onClick={sortTasksHandler}
				/>
			</div>
			{!isEmpty
				? sortedByComplete.map((task, i) => (
						<motion.div key={task.id} transition={SPRING_TRANSITION}>
							<Task task={task} isLastChild={tasksLength === i + 1} />
						</motion.div>
				  ))
				: 'no tasks'}
		</Paper>
	);
};

export default observer(TaskList);
