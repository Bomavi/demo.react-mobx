/* npm imports: common */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { motion } from 'framer-motion';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/* root imports: view components */
import { Task, SortButton } from 'features/Home/components';

/* root imports: common */
import { HomeStore } from 'features/Home/store';

/* local imports: common */
import { styles } from './styles';

const spring = {
	type: 'spring',
	damping: 50,
	stiffness: 500,
};

interface TaskListProps extends WithStyles<typeof styles> {
	store?: HomeStore;
}

@inject('store')
@observer
class TaskListComponent extends React.Component<TaskListProps> {
	public componentDidMount() {
		this.props.store!.searchTasks();
	}

	private sortTasksHandler = () => {
		const { sortKey, sortTasks } = this.props.store!;
		if (sortKey === 'asc') sortTasks('desc');
		if (sortKey === 'desc') sortTasks('asc');
	};

	public render() {
		const { classes } = this.props;
		const { sortedByComplete, isEmpty, tasksLength, sortKey } = this.props.store!;

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
						onClick={this.sortTasksHandler}
					/>
				</div>
				{!isEmpty
					? sortedByComplete.map((task, i) => (
							<motion.div key={task.id} positionTransition={spring}>
								<Task task={task} isLastChild={tasksLength === i + 1} />
							</motion.div>
					  ))
					: 'no tasks'}
			</Paper>
		);
	}
}

const TaskList = withStyles(styles)(TaskListComponent);

export { TaskList };
